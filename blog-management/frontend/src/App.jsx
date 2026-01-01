import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.jsx";

import Login from "./pages/login.jsx";
import Register from "./pages/register.jsx";
import Blogs from "./pages/blog.jsx";
import AddBlog from "./pages/addblog.jsx";

import ProtectedRoute from "./components/protectroutes.jsx";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Blogs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Route */}
        <Route
          path="/add"
          element={
            <ProtectedRoute>
              <AddBlog />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
};

export default App;
