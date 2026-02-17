// src/pages/Home.jsx
import React, { useState, useContext } from "react";
import { CartContext } from "../context/cartcontext";
import { useNavigate } from "react-router-dom";

// Ice-cream data array
const iceCreams = [
  { id: 1, name: "Vanilla Scoop", img: "https://images.unsplash.com/photo-1563805042-7684f5f0bff3?auto=format&fit=crop&w=800&q=80", price: 120 },
  { id: 2, name: "Chocolate Delight", img: "https://images.unsplash.com/photo-1617196036507-78954c4d044e?auto=format&fit=crop&w=800&q=80", price: 150 },
  { id: 3, name: "Strawberry Swirl", img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80", price: 140 },
  { id: 4, name: "Mango Tango", img: "https://images.unsplash.com/photo-1598032890033-90b5e0f61b9c?auto=format&fit=crop&w=800&q=80", price: 130 },
  { id: 5, name: "Pistachio Crunch", img: "https://images.unsplash.com/photo-1617196036507-78954c4d044e?auto=format&fit=crop&w=800&q=80", price: 160 },
  { id: 6, name: "Cookies & Cream", img: "https://images.unsplash.com/photo-1598032890033-90b5e0f61b9c?auto=format&fit=crop&w=800&q=80", price: 150 },
];

export default function Home() {
  const { cart, addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  // Horizontal scroll animation
  const [scrollDir, setScrollDir] = useState(true); // true = left→right, false = right→left

  return (
    <>
      <style>{`
        * { margin:0; padding:0; box-sizing:border-box; font-family:'Poppins',sans-serif; }
        body { background:#0d0d0d; color:#fff; }

        /* NAVBAR */
        .navbar { display:flex; justify-content:space-between; align-items:center; padding:20px 50px; background:#111; position:sticky; top:0; z-index:1000; }
        .navbar .logo { font-size:28px; font-weight:700; color:orange; cursor:pointer; }
        .navbar .nav-links { display:flex; gap:30px; align-items:center; }
        .navbar .nav-links a { color:#fff; text-decoration:none; font-weight:500; position:relative; }
        .navbar .nav-links a:hover { color:orange; }
        .cart-badge { position:absolute; top:-8px; right:-12px; background:orange; color:#111; font-size:12px; padding:2px 6px; border-radius:50%; font-weight:600; }

        /* HERO */
        .hero { height:70vh; background:linear-gradient(rgba(0,0,0,.6),rgba(0,0,0,.6)), url("https://images.unsplash.com/photo-1617196036507-78954c4d044e?auto=format&fit=crop&w=1400&q=80") center/cover no-repeat; display:flex; align-items:center; justify-content:flex-start; padding-left:80px; }
        .hero h1 { font-size:60px; margin-bottom:15px; }
        .hero p { font-size:18px; max-width:450px; opacity:0.9; margin-bottom:25px; }
        .hero button { padding:12px 28px; background:orange; border:none; border-radius:25px; font-weight:600; cursor:pointer; }

        /* SIDEBAR */
        .sidebar { position:fixed; top:100px; left:0; width:220px; height:calc(100vh - 100px); background:#111; padding:20px; overflow-y:auto; border-right:1px solid #222; }
        .sidebar h3 { margin-bottom:20px; color:orange; }
        .sidebar .item { display:flex; justify-content:space-between; align-items:center; margin-bottom:15px; padding:8px 10px; background:#222; border-radius:10px; cursor:pointer; transition:0.3s; }
        .sidebar .item:hover { background:orange; color:#111; }
        .sidebar .item button { background:#fff; color:#111; border:none; border-radius:5px; padding:3px 8px; font-weight:600; cursor:pointer; }
        .sidebar::-webkit-scrollbar { width:6px; }
        .sidebar::-webkit-scrollbar-thumb { background:orange; border-radius:3px; }

        /* SCROLL SECTION */
        .scroll-section { padding:70px 40px; overflow:hidden; }
        .scroll-track { display:flex; gap:20px; width:max-content; animation: ${scrollDir ? "scrollLeft" : "scrollRight"} 25s linear infinite; }
        .scroll-section:hover .scroll-track { animation-play-state:paused; }
        .ice-cream-card { width:220px; background:#222; border-radius:15px; overflow:hidden; flex-shrink:0; transition:0.4s; }
        .ice-cream-card:hover { transform:scale(1.05); box-shadow:0 0 20px orange; }
        .ice-cream-card img { width:100%; height:150px; object-fit:cover; }
        .ice-cream-card h4 { padding:10px; text-align:center; font-weight:600; }

        @keyframes scrollLeft { from { transform:translateX(0); } to { transform:translateX(-50%); } }
        @keyframes scrollRight { from { transform:translateX(-50%); } to { transform:translateX(0); } }

        /* FOOTER */
        .footer { padding:50px 40px; background:#111; margin-top:50px; }
        .footer h3 { color:orange; margin-bottom:20px; }
        .footer p, .footer a { color:#fff; opacity:0.8; font-size:14px; margin-bottom:8px; text-decoration:none; display:block; }
        .footer a:hover { color:orange; }
      `}</style>

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo" onClick={() => navigate("/user")}>IceCream Delight</div>
        <div className="nav-links">
          <a onClick={() => navigate("/user")}>Home</a>
          <a onClick={() => navigate("/user/orders")}>Orders</a>
          <a className="cart-link" onClick={() => navigate("/user/cart")}>
            Cart {cart.length > 0 && <span className="cart-badge">{cart.length}</span>}
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div>
          <h1>Ice Cream Paradise</h1>
          <p>Delicious handcrafted ice creams delivered fresh for you and your family.</p>
          <button onClick={() => navigate("/user/ice-creams")}>Order Now</button>
        </div>
      </section>

      {/* SCROLL SECTIONS */}
      <section className="scroll-section">
        <h2>Top Flavors</h2>
        <div className="scroll-track">
          {[...iceCreams, ...iceCreams].map((ice) => (
            <div className="ice-cream-card" key={ice.id}>
              <img src={ice.img} alt={ice.name} />
              <h4>{ice.name}</h4>
            </div>
          ))}
        </div>
      </section>

      <section className="scroll-section">
        <h2>New Arrivals</h2>
        <div className="scroll-track">
          {[...iceCreams.reverse(), ...iceCreams.reverse()].map((ice, idx) => (
            <div className="ice-cream-card" key={idx}>
              <img src={ice.img} alt={ice.name} />
              <h4>{ice.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* SIDEBAR */}
      <div className="sidebar">
        <h3>Flavors</h3>
        {iceCreams.map((ice) => (
          <div className="item" key={ice.id}>
            <span>{ice.name}</span>
            <button onClick={() => addToCart(ice)}>Add</button>
          </div>
        ))}
      </div>

      {/* FOOTER */}
      <footer className="footer">
        <h3>IceCream Delight</h3>
        <p>Handcrafted ice creams made fresh every day.</p>
        <a href="#">Home</a>
        <a href="#">Flavors</a>
        <a href="#">Orders</a>
        <a href="#">Contact</a>
      </footer>
    </>
  );
}
