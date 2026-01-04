import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { email, password } = loginData;

        if (!email || !email.includes("@")) {
            alert("Please enter a valid email");
            return;
        }

        if (!password || password.length < 6) {
            alert("Password must be at least 6 characters");
            return;
        }

       
        navigate("/account-settings");
    };

    return (
        <div className="w-full p-8">
            <h2 className="text-4xl font-bold mb-2 leading-12">
                Signin to your PopX account
            </h2>

            <div className="text-gray-500 mb-8 mt-4 text-lg">
                <p>Lorem ipsum dolor sit amet,</p>
                <p>consectetur adipiscing elit</p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                {/* Email */}
                <div className="relative">
                    <label
                        htmlFor="email"
                        className="absolute left-4 -top-4 text-purple-600 text-xl bg-[#F6F6F6] px-1"
                    >
                        Email Address
                    </label>
                    <input
                        required
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Enter email address"
                        value={loginData.email}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-4 outline-none focus:border-purple-500 focus:ring-0 text-lg"
                    />
                </div>

                {/* Password */}
                <div className="relative">
                    <label
                        htmlFor="password"
                        className="absolute left-2 -top-2.5 text-purple-600 text-xl bg-[#F6F6F6] px-1"
                    >
                        Password
                    </label>
                    <input
                        required
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter password"
                        value={loginData.password}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-4 outline-none focus:border-purple-500 focus:ring-0 text-lg"
                    />
                </div>

                {/* Login button */}
                <button
                    type="submit"
                    className="w-full bg-gray-300 text-white text-xl py-2 rounded-md font-semibold mt-2 cursor-pointer hover:bg-purple-600 transition-colors"
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
