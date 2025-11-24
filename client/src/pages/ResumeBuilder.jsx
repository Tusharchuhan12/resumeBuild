import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiMapPin,
  FiBriefcase,
  FiLinkedin,
  FiGlobe,
  FiDownload,
} from "react-icons/fi";

import jsPDF from "jspdf";
import html2canvas from "html2canvas";

import ClassicTemplate from "../assets/templates/ClassicTemplate";
import ModernTemplate from "../assets/templates/ModernTemplate";

import { useDispatch, useSelector } from "react-redux";
import { createResume, getResumeById, updateResume } from "../store/resumeSlice";
import { toast } from "react-toastify";

export default function ResumeBuilder() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const previewRef = useRef(null);
  const { id } = useParams();          // 🟢 EDIT MODE id

  const { singleResume } = useSelector((state) => state.resume);

  const [step, setStep] = useState(1);
  const [selectedTemplate, setSelectedTemplate] = useState("modern");
  const [showTemplateModal, setShowTemplateModal] = useState(false);
  const [accentColor, setAccentColor] = useState("#4F46E5");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    profession: "",
    linkedin: "",
    website: "",
    education: "",
    experience: "",
    projects: "",
    skills: "",
  });

  // 🟢 If editing -> load resume from backend
  useEffect(() => {
    if (id !== "new") {
      dispatch(getResumeById(id));
    }
  }, [id, dispatch]);

  // 🟢 Auto-fill previous data
  useEffect(() => {
    if (singleResume) {
      setFormData(singleResume);
    }
  }, [singleResume]);

  // SAVE or UPDATE Resume
  const handleSaveResume = () => {
    if (id !== "new") {
      dispatch(updateResume({ id, data: formData }))
        .unwrap()
        .then(() => toast.success("Resume Updated!"));
    } else {
      dispatch(createResume(formData))
        .unwrap()
        .then(() => toast.success("Resume Saved Successfully!"));
    }
  };

  const downloadPDF = async () => {
    const previewNode = previewRef.current;
    const elements = previewNode.querySelectorAll("*");

    elements.forEach((el) => {
      const style = window.getComputedStyle(el);
      if (style.color.includes("oklch(")) el.style.color = "#1f2937";
      if (style.backgroundColor.includes("oklch(")) el.style.backgroundColor = "#ffffff";
    });

    const canvas = await html2canvas(previewRef.current, {
      scale: 2,
      useCORS: true
    });

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");

    const width = pdf.internal.pageSize.getWidth();
    const height = (canvas.height * width) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, width, height);
    pdf.save("resume.pdf");
  };

  const inputFields = [
    { label: "Full Name", name: "fullName", icon: <FiUser /> },
    { label: "Email", name: "email", icon: <FiMail /> },
    { label: "Phone", name: "phone", icon: <FiPhone /> },
    { label: "Location", name: "location", icon: <FiMapPin /> },
    { label: "Profession", name: "profession", icon: <FiBriefcase /> },
    { label: "LinkedIn", name: "linkedin", icon: <FiLinkedin /> },
    { label: "Website", name: "website", icon: <FiGlobe /> },
  ];

  const colors = ["#4F46E5", "#3B82F6", "#10B981", "#EF4444", "#F59E0B"];

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-6">

      {/* HEADER */}
      <div className="bg-white rounded-xl shadow p-4 mb-6 flex flex-wrap gap-4 justify-between items-center">

        <button
          onClick={() => navigate("/Layout")}
          className="text-sm font-medium text-gray-700 hover:text-blue-600"
        >
          ← Back to Dashboard
        </button>

        <div className="flex flex-wrap gap-3">

          <button
            onClick={() => setShowTemplateModal(true)}
            className="bg-purple-100 text-purple-700 px-4 py-2 text-sm rounded-lg"
          >
            Select Template
          </button>

          <button
            onClick={handleSaveResume}
            className="bg-green text-green px-4 py-2 text-sm rounded-lg shadow"
          >
            {id !== "new" ? "Update Resume" : "Save Resume"}
          </button>

          <div className="flex gap-2 items-center">
            {colors.map((c, i) => (
              <button
                key={i}
                onClick={() => setAccentColor(c)}
                style={{ background: c }}
                className="w-6 h-6 rounded-full shadow-md"
              />
            ))}
          </div>

          <button
            onClick={downloadPDF}
            className="bg-green-600 hover:bg-green-700 text-black px-4 py-2 text-sm rounded-lg flex items-center gap-2 shadow"
          >
            <FiDownload size={16} /> Download
          </button>

          <button
            onClick={() => setStep(step === 1 ? 2 : 1)}
            className="bg-gray-900 text-white px-4 py-2 text-sm rounded-lg shadow"
          >
            {step === 1 ? "Next →" : "← Back"}
          </button>

        </div>
      </div>

      {/* TEMPLATE SELECTION MODAL */}
      {showTemplateModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 w-[350px]">
            <h2 className="font-semibold text-lg mb-4">Choose Template</h2>

            {["modern", "classic"].map((id) => (
              <button
                key={id}
                onClick={() => {
                  setSelectedTemplate(id);
                  setShowTemplateModal(false);
                }}
                className={`block w-full border p-3 rounded-lg mb-3 text-left 
                  ${selectedTemplate === id ? "border-purple-600 shadow-md" : ""}`}
              >
                {id === "modern" ? "Modern Template" : "Classic Template"}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* MAIN CONTENT */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* INPUT AREA */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          {step === 1 ? (
            <>
              <h2 className="text-lg font-bold mb-3">Personal Information</h2>
              {inputFields.map((f) => (
                <div key={f.name} className="mb-3">
                  <label className="text-sm font-medium">{f.label}</label>
                  <div className="flex items-center border rounded-lg px-3 mt-1 bg-gray-50">
                    <span className="text-gray-400">{f.icon}</span>
                    <input
                      name={f.name}
                      value={formData[f.name]}
                      className="w-full py-2 bg-transparent outline-none px-2"
                      onChange={(e) =>
                        setFormData({ ...formData, [e.target.name]: e.target.value })
                      }
                    />
                  </div>
                </div>
              ))}
            </>
          ) : (
            <>
              <h2 className="text-lg font-bold mb-3">Professional Details</h2>

              {["education", "experience", "projects"].map((field) => (
                <div key={field} className="mb-3">
                  <label className="text-sm font-medium capitalize">{field}</label>
                  <textarea
                    rows="3"
                    className="w-full border rounded-lg mt-1 p-2"
                    value={formData[field]}
                    onChange={(e) =>
                      setFormData({ ...formData, [field]: e.target.value })
                    }
                  />
                </div>
              ))}

              <label className="text-sm font-medium">Skills</label>
              <input
                className="w-full border rounded-lg p-2 mt-1"
                value={formData.skills}
                onChange={(e) =>
                  setFormData({ ...formData, skills: e.target.value })
                }
              />
            </>
          )}
        </div>

        {/* PREVIEW AREA */}
        <div className="sticky top-4 bg-white shadow-lg rounded-xl p-4 overflow-y-auto max-h-[85vh]">
          <div ref={previewRef} className="p-4">
            {selectedTemplate === "modern" ? (
              <ModernTemplate data={formData} accentColor={accentColor} />
            ) : (
              <ClassicTemplate data={formData} accentColor={accentColor} />
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
