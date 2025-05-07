import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SetPassword() {
  const { token } = useParams();
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    
    if (!passwordRegex.test(password)) {
      return toast.error(
        "Password must be at least 8 characters long, include one letter, one number, and one special character."
      );
    }
  
    if (password !== confirmPassword) {
      return toast.error("Passwords do not match");
    }
  
    try {
      const res = await fetch(`${process.env.REACT_APP_BASE_URL}/api/user/resetpassword`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${token}`
        },
        body: JSON.stringify({ password })
      });
  
      const data = await res.json();
      if (res.ok) {
        toast.success("Password updated successfully");
        setTimeout(() => {
          navigate('/login');
        }, 3000);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };
  

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-b from-sky-100 to-blue-100 px-4">
      <div className="bg-white shadow-lg rounded-xl px-8 py-10 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Set New Password</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="password"
            placeholder="New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="w-full bg-[#FFAB00] text-black py-3 rounded-lg  transition-colors"
          >
            Set Password
          </button>
        </form>
      </div>
      <ToastContainer position="top-center" />
    </div>
  );
}

export default SetPassword;
