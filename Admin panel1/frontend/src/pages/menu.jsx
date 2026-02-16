import React, { useEffect, useState } from "react";
import axios from "axios";
import { base_uri } from "../utils/globalfunction";

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(`${base_uri}/menu`, { headers: { Authorization: `Bearer ${token}` } });
        setMenuItems(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchMenu();
  }, []);

  return (
    <div className="container mt-4">
      <h2>Menu Items</h2>
      <div className="row mt-3">
        {menuItems.map((item) => (
          <div className="col-md-4 mb-3" key={item._id}>
            <div className="card">
              <img src={item.image} className="card-img-top" alt={item.name} />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.description}</p>
                <p className="card-text fw-bold">₹{item.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
