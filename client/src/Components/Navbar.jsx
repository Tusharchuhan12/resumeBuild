import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

 
    const { user } = useSelector((state) => state.auth);

    return (
        <header className="mb-10 flex items-center justify-between px-6 py-3 md:py-4 shadow max-w-5xl rounded-full mx-auto w-full bg-white">
            <a href="/">
                <img src="logo.svg" alt="Logo" className="w-28 md:w-32" />
            </a>

       
            <nav
                className={`absolute md:static top-0 left-0 bg-white/70 backdrop-blur-lg flex flex-col md:flex-row items-center gap-6 md:gap-8 text-gray-900 text-lg font-normal transition-all duration-300
                ${isOpen ? "w-full h-screen pt-20" : "w-0 h-0 md:h-auto md:w-auto overflow-hidden md:overflow-visible"}`}
            >
                <a className="hover:text-indigo-600" href="/">Home</a>
                <a className="hover:text-indigo-600" href="#Features">Features</a>
                <a className="hover:text-indigo-600" href="#Testimonal">Testimonials</a>
                <a className="hover:text-indigo-600" href="#About">About</a>

                <button
                    className="md:hidden text-gray-700 absolute top-6 right-6"
                    onClick={() => setIsOpen(false)}
                >
                    <FiX size={28} />
                </button>
            </nav>

           
            <div className="flex items-center space-x-4">

             
                {!user ? (
                  
                    <button
                        className="hidden md:flex bg-indigo-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-indigo-700 transition"
                        onClick={() => navigate('/Login')}
                    >
                        Get Started
                    </button>
                ) : (
                  
                    <button
                        className="hidden md:flex bg-indigo-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-indigo-700 transition"
                        onClick={() => navigate('/Layout')}
                    >
                        Dashboard
                    </button>
                )}

                <button
                    className="md:hidden text-gray-700"
                    onClick={() => setIsOpen(true)}
                >
                    <FiMenu size={28} />
                </button>
            </div>
        </header>
    );
}

export default Navbar;
