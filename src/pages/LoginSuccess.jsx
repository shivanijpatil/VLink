import React from "react";
import { useNavigate } from "react-router-dom";

const LoginSuccess = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    navigate("/login");
  };

  return (
    <div className="h-screen w-full relative bg-white">
      {/* Sign Out Button - top right */}
      <div className="absolute top-4 right-4">
        <button
          onClick={handleSignOut}
          className="bg-[#f8d591] text-black px-4 py-2 rounded-lg  transition"
        >
          Sign Out
        </button>
      </div>

      {/* Centered Success Message with margin from top */}
      <div className="flex items-start justify-center h-full pt-20">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-green-600">Login Successful!</h1>
          <p className="mt-2 text-gray-700">Welcome to your dashboard.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSuccess;
