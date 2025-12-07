import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar";
import Home from "./pages/Home";
import AddMovie from "./pages/Addmovie";
import EditMovie from "./pages/Editmovie";
import ViewMovie from "./pages/Viewmovie";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <Sidebar />
        <main className="main-area">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddMovie />} />
            <Route path="/edit/:id" element={<EditMovie />} />
            <Route path="/view/:id" element={<ViewMovie />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
