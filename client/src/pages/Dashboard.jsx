// Dashboard.jsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiPlus, FiUploadCloud, FiEdit2, FiTrash2 } from "react-icons/fi";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { getMyResumes, getResumeById, deleteResume } from "../store/resumeSlice";

export default function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Redux state
  const { resumes, loading } = useSelector((state) => state.resume);

  // ✅ Fetch all resumes on mount
  useEffect(() => {
    dispatch(getMyResumes());
  }, [dispatch]);

  // Create new resume
  const handleCreateNew = () => {
    navigate(`/resumeBuilder/new`);
  };

  // Upload resume page
  const handleUpload = () => {
    navigate("/upload-resume");
  };

  // Edit resume
  const handleEdit = async (id) => {
    const res = await dispatch(getResumeById(id)); // fetch single resume
    if (res.payload) {
      navigate(`/resumeBuilder/${id}`);
    }
  };

  // Delete resume
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this resume?")) {
      await dispatch(deleteResume(id));
      dispatch(getMyResumes()); // refresh list after deletion
    }
  };

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="p-6">
      {/* Top Buttons */}
      <section className="flex gap-9 mt-10 ml-10">
        <button
          onClick={handleCreateNew}
          className="h-56 w-50 flex flex-col items-center justify-center bg-white rounded-xl border border-dashed border-indigo-300 hover:shadow-lg hover:border-indigo-500 transition-all"
        >
          <div className="w-14 h-14 rounded-full bg-gradient-to-r from-indigo-400 to-purple-500 flex items-center justify-center mb-3">
            <FiPlus className="text-white text-3xl" />
          </div>
          <p className="font-medium text-slate-700">Create Resume</p>
        </button>

       
      </section>

      {/* Resume Cards */}
      <div className="mt-5 ml-10 flex gap-6 flex-wrap">
        {resumes?.length > 0 ? (
          resumes.map((resume) => (
            <div
              key={resume._id}
              onClick={() => navigate(`/Preview/${resume._id}`)}
              className="group relative w-50 h-56 bg-gradient-to-br from-purple-50 to-purple-200 rounded-xl shadow-sm flex flex-col items-center justify-between py-6 cursor-pointer hover:shadow-md transition-all"
            >
              {/* Hover Icons */}
              <div
                className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-all"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => handleEdit(resume._id)}
                  className="bg-white p-1.5 rounded-md shadow-sm hover:bg-gray-100"
                >
                  <FiEdit2 className="text-indigo-600" />
                </button>
                <button
                  onClick={() => handleDelete(resume._id)}
                  className="bg-white p-1.5 rounded-md shadow-sm hover:bg-gray-100"
                >
                  <FiTrash2 className="text-red-500" />
                </button>
              </div>

              {/* Resume Info */}
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center mb-3 overflow-hidden">
                  {/* Placeholder for avatar/image */}
                </div>
                <p className="font-medium text-slate-800">
                  {resume.fullName || "No Name"}
                </p>
                <p className="text-sm text-slate-500">
                  {resume.profession || "No Profession"}
                </p>
              </div>

              <p className="text-[11px] text-slate-500">
                Updated on {new Date(resume.updatedAt).toLocaleDateString()}
              </p>
            </div>
          ))
        ) : (
          <p className="text-slate-500 ml-2 mt-5">No resumes found.</p>
        )}
      </div>
    </div>
  );
}

