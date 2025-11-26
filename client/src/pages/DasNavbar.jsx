import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/authSlice";
import { useNavigate } from "react-router-dom";

function DasNavbar() {
    const { user } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
        navigate("/");
    };

    return (
        <header className="w-full bg-white shadow-md py-3 px-4 sm:px-6 flex items-center justify-between">

            {/* Logo */}
            <div className="flex items-center gap-2 sm:gap-3">
                <img
                    onClick={() => navigate("/")}
                    src="/logo.svg"
                    alt="Logo"
                    className="w-24 sm:w-32 cursor-pointer"
                />
            </div>

            {/* User + Logout */}
            <div className="flex items-center gap-2 sm:gap-4">
                {/* Mobile me user ka naam hide */}
                <span className="text-gray-700 font-medium hidden sm:block">
                    Welcome, {user?.name}
                </span>

                <button
                    onClick={handleLogout}
                    className="bg-red-500 text-white py-1 px-3 sm:px-4 rounded-md hover:bg-red-600 transition text-sm sm:text-base"
                >
                    Logout
                </button>
            </div>
        </header>
    );
}

export default DasNavbar;
