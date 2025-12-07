import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import AllMovies from "./pages/Allmovies";
import AddMovie from "./pages/Addmovie";
import EditMovie from "./pages/Editmovie";
import MovieDetails from "./pages/Moviedetails";

function App() {
  return (
    <BrowserRouter>
      <div className="app-root">
        <Sidebar />
        <div className="main-area">
          <Navbar />
          <div className="page-area">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/movies" element={<AllMovies />} />
              <Route path="/add" element={<AddMovie />} />
              <Route path="/edit/:id" element={<EditMovie />} />
              <Route path="/movie/:id" element={<MovieDetails />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
