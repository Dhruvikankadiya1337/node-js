import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null); 
  const [loading, setLoading] = useState(true); 
  const [isOtpVerified, setIsOtpVerified] = useState(false); 

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");
    const otpVerified = localStorage.getItem("otpVerified") === "true";

    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));
      setToken(storedToken);
      setIsOtpVerified(otpVerified);
    }
    setLoading(false);
  }, []);

  // login function
  const loginUser = (userData, authToken) => {
    setUser(userData);
    setToken(authToken);
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("token", authToken);
  };

  // logout function
  const logoutUser = () => {
    setUser(null);
    setToken(null);
    setIsOtpVerified(false);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("otpVerified");
  };

  //  otp verification function
  const verifyOtp = () => {
    setIsOtpVerified(true);
    localStorage.setItem("otpVerified", "true");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        isOtpVerified,
        loginUser,
        logoutUser,
        verifyOtp,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
