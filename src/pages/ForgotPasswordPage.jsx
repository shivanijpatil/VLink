import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleResetPassword = (e) => {
    e.preventDefault();
  
    const storedEmail = localStorage.getItem("userEmail");
  
    if (email !== storedEmail) {
      toast.error("Email not found.");
      return;
    }
  
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&_])[A-Za-z\d@$!%*?#&_]{8,}$/;
  
    if (!passwordRegex.test(newPassword)) {
      toast.error(
        "Password must be at least 8 characters and include uppercase, lowercase, number, and special character."
      );
      return;
    }
  
    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }
  
    localStorage.setItem("userPassword", newPassword);
    toast.success("Password updated successfully!");
  
    setTimeout(() => {
      navigate("/"); 
    }, 2000);
  };
  

  return (
    <div className="flex items-center justify-center h-screen bg-blue-50">
      <form
        onSubmit={handleResetPassword}
        className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-black">
          Reset Password
        </h2>

        <div className="mb-4">
          <label htmlFor="email" className="block text-black mb-2">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="newPassword" className="block text-black mb-2">
            New Password
          </label>
          <input
            id="newPassword"
            type="password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="confirmPassword" className="block text-black mb-2">
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            type="password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#f8d591] text-black py-2.5 rounded-lg font-semibold hover:bg-yellow-300 transition duration-200"
        >
          Reset Password
        </button>
      </form>
      <ToastContainer position="top-center" />
    </div>
  );
};

export default ForgotPasswordPage;
