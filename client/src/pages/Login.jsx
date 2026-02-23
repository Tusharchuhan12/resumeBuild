import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, registerUser } from "../store/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { loading, error, user } = useSelector((state) => state.auth);

    const [state, setState] = useState("login");

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (state === "login") {
            dispatch(loginUser({
                email: formData.email,
                password: formData.password
            }));
        } else {
            dispatch(registerUser(formData));
        }
    };

    useEffect(() => {
        if (user) {
            navigate("/Layout");
            toast.success("Logged in successfully!");
        }
    }, [user, navigate]);

    useEffect(() => {
        if (error) {
            toast.error(error);
        }
    }, [error]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4 py-10 bg-gray-50">

            <form
                onSubmit={handleSubmit}
                className="w-full max-w-md text-center border border-gray-300/60 rounded-2xl px-6 sm:px-8 py-8 bg-white shadow-lg"
            >

                <h1 className="text-gray-900 text-2xl sm:text-3xl font-medium">
                    {state === "login" ? "Login" : "Sign Up"}
                </h1>

                {error && (
                    <p className="text-red-500 text-sm mt-2">{error}</p>
                )}

                {state === "register" && (
                    <div className="flex items-center mt-6 w-full border h-12 rounded-full overflow-hidden pl-4 sm:pl-6 gap-2">
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            className="border-none outline-none w-full text-sm"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                )}

                <div className="flex items-center w-full mt-4 border h-12 rounded-full overflow-hidden pl-4 sm:pl-6 gap-2">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="border-none outline-none w-full text-sm"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="flex items-center mt-4 w-full border h-12 rounded-full overflow-hidden pl-4 sm:pl-6 pr-3 gap-2 relative">

                    <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Password"
                        className="border-none outline-none w-full text-sm"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />

                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 text-gray-500 text-xs sm:text-sm"
                    >
                        {showPassword ? "Hide" : "Show"}
                    </button>
                </div>

                <button
                    type="submit"
                    className="mt-6 w-full h-11 sm:h-12 rounded-full text-white bg-indigo-500 hover:bg-indigo-600 transition text-sm sm:text-base"
                >
                    {loading
                        ? "Please wait..."
                        : state === "login"
                            ? "Login"
                            : "Sign Up"}
                </button>

                <p
                    onClick={() =>
                        setState(prev => (prev === "login" ? "register" : "login"))
                    }
                    className="text-gray-500 text-sm mt-4 cursor-pointer"
                >
                    {state === "login"
                        ? "Don't have an account?"
                        : "Already have an account?"}
                    <span className="text-indigo-500 ml-1">
                        Click here
                    </span>
                </p>

            </form>
        </div>
    );
};

export default Login;