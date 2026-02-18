import { useContext, useState } from "react";
import { CartContext } from "../context/cartcontext";

export default function Sidebar({ isOpen, closeSidebar, flavors }) {
  const { addToCart, orders } = useContext(CartContext);
  const [search, setSearch] = useState("");

  const filteredFlavors = flavors.filter((f) =>
    f.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={closeSidebar}>×</button>
        <h3>Flavors</h3>
        <input
          type="text"
          placeholder="Search flavor..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="flavor-list">
          {filteredFlavors.map((f) => (
            <div className="flavor-card" key={f.id}>
              <img src={f.img} alt={f.name} />
              <span>{f.name}</span>
              <button onClick={() => addToCart(f)}>Add to Cart</button>
            </div>
          ))}
        </div>
        <h3>My Orders</h3>
        <div className="orders-list">
          {orders.length === 0 && <p>No orders yet.</p>}
          {orders.map((o, idx) => (
            <div className="order-card" key={idx}>
              {o.name} - ₹{o.price}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .sidebar {
          position:fixed;
          top:0; right:-300px;
          width:300px;
          height:100%;
          background:#222;
          color:#fff;
          padding:20px;
          transition:0.3s;
          overflow-y:auto;
          z-index:1001;
        }
        .sidebar.open { right:0; }
        .close-btn {
          font-size:24px;
          background:none;
          border:none;
          color:#fff;
          cursor:pointer;
          margin-bottom:10px;
        }
        input {
          width:100%;
          padding:6px 10px;
          margin-bottom:10px;
          border-radius:6px;
          border:none;
        }
        .flavor-card {
          display:flex;
          flex-direction:column;
          align-items:center;
          margin-bottom:12px;
          background:#333;
          padding:10px;
          border-radius:10px;
        }
        .flavor-card img { width:100px; height:100px; object-fit:cover; border-radius:50%; margin-bottom:5px; }
        .flavor-card button { margin-top:5px; padding:5px 10px; border:none; border-radius:6px; background:#FFA500; color:#111; font-weight:600; cursor:pointer; }
        .orders-list { margin-top:15px; max-height:200px; overflow-y:auto; }
        .order-card { background:#111; padding:8px; border-radius:6px; margin-bottom:5px; }
      `}</style>
    </>
  );
}
