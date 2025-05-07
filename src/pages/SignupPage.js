import React, { useState } from 'react';
import LoginSignupImage from '../Images/Loginsignupimage.png';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SignupPage = ({ onSwitchToLogin }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [address, setAddress] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&_])[A-Za-z\d@$!%*?#&_]{8,}$/;
    
        if (!passwordRegex.test(password)) {
            toast.error('Password must be at least 8 characters and include uppercase, lowercase, number, and special character.');
            return;
        }
    
        if (password !== confirmPassword) {
            toast.error('Passwords do not match.');
            return;
        }
    
        // Store email and password in localStorage (consider hashing in real apps)
        localStorage.setItem("userEmail", email);
        localStorage.setItem("userPassword", password);
    
        toast.success('Signup successful!');
        setTimeout(() => {
            navigate('/login');
        }, 2000);
    };
    
    
    return (
        <div className="flex min-h-screen w-full">
            {/* Left side - Signup form */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 md:px-16 lg:px-24 bg-white">
                <div className="max-w-xl w-full mx-auto">
                    <h1 className="text-4xl font-bold mb-1 text-black">Create Account</h1>
                    <p className="text-black mb-6">Please fill in your details to sign up</p>

                    <form onSubmit={handleSubmit} className="space-y-2 p-6 border border-gray-100 rounded-lg shadow-sm bg-white">
                        {/* Personal Information Section */}
                        <div className="space-y-2">
                            <div className="space-y-1">
                                <label htmlFor="name" className="block text-xs font-medium text-black">Full Name</label>
                                <input
                                    id="name"
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-transparent transition-all duration-200"
                                    placeholder="Enter your full name"
                                    required
                                />
                            </div>

                            <div className="space-y-1">
                                <label htmlFor="email" className="block text-xs font-medium text-black">Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-transparent transition-all duration-200"
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>

                            <div className="space-y-1">
                                <label htmlFor="phone" className="block text-xs font-medium text-black">
                                    Phone Number
                                </label>
                                <input
                                    id="phone"
                                    type="tel"
                                    inputMode="numeric"          // helps mobile keyboard show digits only
                                    pattern="\d{10}"             // enforces 10-digit pattern on submit
                                    maxLength={10}               // hard cap input length at 10
                                    value={phone}
                                    onChange={(e) => {
                                        const input = e.target.value;
                                        // Only allow digits and up to 10 characters
                                        if (/^\d{0,10}$/.test(input)) {
                                            setPhone(input);
                                        }
                                    }}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-transparent transition-all duration-200"
                                    placeholder="Enter your 10-digit phone number"
                                    required
                                />
                            </div>

                            <div className="space-y-1">
                                <label htmlFor="password" className="block text-xs font-medium text-black">Password</label>
                                <input
                                    id="password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-300"
                                    placeholder="Enter your password"
                                    required
                                />
                            </div>

                            <div className="space-y-1">
                                <label htmlFor="confirmPassword" className="block text-xs font-medium text-black">Confirm Password</label>
                                <input
                                    id="confirmPassword"
                                    type="password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-300"
                                    placeholder="Re-enter your password"
                                    required
                                />
                            </div>
                        </div>

                        {/* Company Information Section */}
                        <div>
                            <div className="space-y-2">
                                <div className="space-y-1">
                                    <label htmlFor="companyName" className="block text-xs font-medium text-black">Company Name</label>
                                    <input
                                        id="companyName"
                                        type="text"
                                        value={companyName}
                                        onChange={(e) => setCompanyName(e.target.value)}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-transparent transition-all duration-200"
                                        placeholder="Enter your company name"
                                    />
                                </div>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#f8d591] text-black py-2 rounded-lg font-medium  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 transition-colors duration-200 shadow-md mt-3"
                        >
                            Sign Up
                        </button>
                    </form>


                    <div className="mt-4 text-center">
                        <p className="text-black">Already have an account? <a href="#" onClick={(e) => {
                            e.preventDefault();
                            navigate('/login');
                        }} className="text-black hover:text-gray-800 font-medium">Sign In</a></p>
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
                    <h2 className="text-3xl font-bold text-black mb-4">Transform Your Workflow</h2>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;