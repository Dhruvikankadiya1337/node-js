import { Link, useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useContext(CartContext);
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path) => (location.pathname === path ? "nav-active" : "");

  return (
    <>
      <nav className="ice-navbar">
        <div className="logo">IceCream Galaxy</div>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <Link className={isActive("/home")} to="/home">
            Home
          </Link>
          <Link className={isActive("/flavors")} to="/flavors">
            Flavors
          </Link>
          <Link className={isActive("/orders")} to="/orders">
            My Orders
          </Link>
          <Link className={`cart-link ${isActive("/cart")}`} to="/cart">
            Cart {cart.length > 0 && <span className="cart-badge">{cart.length}</span>}
          </Link>
        </div>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      <style>{`
        body {
          margin: 0;
          font-family: 'Poppins', sans-serif;
          background: #0b0b0b;
          color: #fff;
        }

        .ice-navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 50px;
          background: linear-gradient(90deg, #FFAFBD, #ffc3a0);
          position: sticky;
          top: 0;
          z-index: 1000;
          box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        }

        .logo {
          font-size: 28px;
          font-weight: 700;
          color: #1E1E2F;
        }

        .nav-links {
          display: flex;
          gap: 35px;
          align-items: center;
        }

        .nav-links a {
          text-decoration: none;
          font-weight: 500;
          color: #1E1E2F;
          padding: 5px 0;
          transition: all 0.3s ease;
          position: relative;
        }

        .nav-links a:hover {
          color: #FF6B81;
        }

        .nav-active {
          color: #FF3CAC;
          font-weight: 600;
        }

        .nav-active::after {
          content: "";
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 100%;
          height: 3px;
          background: #FF3CAC;
          border-radius: 5px;
        }

        .cart-link {
          position: relative;
        }

        .cart-badge {
          position: absolute;
          top: -8px;
          right: -12px;
          background: #FF3CAC;
          color: #fff;
          font-size: 12px;
          font-weight: 600;
          padding: 3px 7px;
          border-radius: 50px;
        }

        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
        }

        .hamburger span {
          display: block;
          width: 25px;
          height: 3px;
          background: #1E1E2F;
          border-radius: 2px;
        }

        @media (max-width: 768px) {
          .nav-links {
            position: absolute;
            top: 65px;
            right: 0;
            background: linear-gradient(180deg, #FFAFBD, #ffc3a0);
            flex-direction: column;
            width: 200px;
            gap: 20px;
            padding: 20px;
            transform: translateX(100%);
            transition: transform 0.3s ease;
          }

          .nav-links.open {
            transform: translateX(0);
          }

          .hamburger {
            display: flex;
          }
        }
      `}</style>
    </>
  );
}
