import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ResetPassword = () => {
  const { token } = useParams();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  // fetch request for reset password
  const handleReset = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return toast.error("Passwords do not match");
    }

    try {
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}/api/user/resetpassword`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
        body: JSON.stringify({ password }),
      });
      const data = await response.json();
      if (response.ok) {
        toast.success(data.message || "Password reset successful");
        setTimeout(() => navigate("/login"), 2500);
      } else {
        toast.error(data.message || "Error resetting password");
      }
    } catch (error) {
      toast.error("Something went wrong. Try again later.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
          Reset Your Password
        </h2>
        <form onSubmit={handleReset} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              New Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter new password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Re-enter new password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
          >
            Reset Password
          </button>
        </form>
      </div>
      <ToastContainer position="top-center" />
    </div>
  );
};

export default ResetPassword;
