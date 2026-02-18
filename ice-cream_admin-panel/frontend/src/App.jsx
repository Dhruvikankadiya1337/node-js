import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Signup from "./pages/signup";
import Signin from "./pages/signin";
import ForgetPassword from "./pages/forgetpassword";
import VerifyOTP from "./pages/verifyotp";
import ChangePassword from "./pages/changepassword";
import Home from './pages/home';
import {CartProvider} from './context/cartcontext'

function App() {
  return (
      <CartProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
<Route path="/signin" element={<Signin />} />

        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
         <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/verify-otp" element={<VerifyOTP />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/home" element={<Home />} />
          <Route path="*" element={<Navigate to="/signin" />} />
      </Routes>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
