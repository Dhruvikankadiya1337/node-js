import {Routes, Route } from 'react-router'
import './App.css'
import SignUp from './pages/signup'
import SignIn from './pages/SignIn'
import otpverify from './pages/otpverify'
import verifyforgetpassword from './pages/verifyforgetpassword'
import forgetpassword from './pages/forgetpassword'
import changrpassword from './pages/changrpassword'


function App() {

  return (
  <Routes>
    <Route path="/" element={<SignIn />} />
      <Route path="/SignUp" element={<SignUp />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/otp-verify" element={<otp-verify />} />
        <Route path="/verify-forget-password" element={<verify-forget-password />} />
            <Route path="/forget-password" element={<forget-password />} />
        <Route path="/change-password" element={<change-password />} />

         
  </Routes>

  )
}

export default App
