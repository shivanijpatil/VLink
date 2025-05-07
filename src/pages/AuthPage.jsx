import React, { useState } from "react";
import LoginSignupImage from "../Images/Loginsignupimage.png";
import { useNavigate,Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();

    const storedEmail = localStorage.getItem("userEmail");
    const storedPassword = localStorage.getItem("userPassword");

    if (email === storedEmail && password === storedPassword) {
      toast.success("Login successful!");
      setTimeout(() => {
        navigate('/loginsuccess');
      }, 1500);
    } else {
      toast.error("Invalid email or password");
    }
  };


  return (
    <div className="flex h-screen w-full ">
      {/* Left side - Login form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 md:px-16 lg:px-24 bg-white">
        <div className="max-w-md w-full mx-auto">
          <h1 className="text-4xl font-bold mb-2 text-black">Welcome Back!</h1>
          <p className="text-black mb-10">
            Please enter your details to sign in
          </p>

          <form
            onSubmit={handleSubmit}
            className="space-y-6 p-6 border border-gray-200 rounded-lg shadow-sm"
          >
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-black"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-transparent transition-all duration-200"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-black"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="Enter your password"
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 text-sky-400 border-gray-300 rounded focus:ring-sky-300"
                />
                <span className="ml-2 text-sm text-black">Remember me</span>
              </label>

              <Link
                to="/forgotpassword"
                className="text-black hover:text-gray-800 text-sm font-medium transition-colors"
              >
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-[#f8d591] text-black py-3.5 rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 transition-colors duration-200 shadow-md"
            >
              Sign In
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-black">
              Don't have an account?{" "}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/signup");
                }}
                className="text-black hover:text-gray-800 font-medium"
              >
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>
      <ToastContainer position="top-center" />


      {/* Right side - Image and message */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-b from-sky-100 to-blue-100 items-center justify-center">
        <div className="max-w-md text-center p-8">
          <img
            src={LoginSignupImage}
            alt="Office workspace"
            className="rounded-xl shadow-xl mb-8 mx-auto max-w-xs border-4 border-white/30"
          />
          <h2 className="text-3xl font-bold text-black mb-4">
            Transform Your Workflow
          </h2>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;