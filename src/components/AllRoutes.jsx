import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import LoginPage from '../pages/AuthPage'
import SignupPage from '../pages/SignupPage'
import LoginSuccess from '../pages/LoginSuccess'
import ForgotPasswordPage from '../pages/ForgotPasswordPage'

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navigate to="/login" replace />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path="/loginsuccess" element={<LoginSuccess />} />
        <Route path="/forgotpassword" element={<ForgotPasswordPage />} />
      </Routes>
    </div>
  )
}

export default AllRoutes
