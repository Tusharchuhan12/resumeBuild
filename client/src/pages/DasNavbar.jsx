import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../store/authSlice";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
function DasNavbar() {
    const { user } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logout());      
        navigate("/");
    };

    return (
        <header className="w-[1200px] m-auto bg-white shadow-md py-3 px-6 flex items-center justify-between">
            {/* Left Side (Logo + Brand) */}
            <div className="flex items-center gap-3">
                <img onClick={()=>navigate("/")} src="/logo.svg" alt="Logo" className="w-28 md:w-32" />
               
            </div>

            {/* Right Side (User Info + Logout Button) */}
            <div className="flex items-center gap-4">
                <span className="text-gray-700 font-medium">Welcome, {user?.name}</span>
                <button
                    onClick={handleLogout}
                    className="bg-red-500 text-white py-1 px-4 rounded-md hover:bg-red-600 transition"
                >
                    Logout
                </button>
            </div>
        </header>
    );
}

export default DasNavbar;
