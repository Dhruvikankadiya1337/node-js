import React, { useEffect, useState, useContext } from "react";
import { BASE_URL } from "../utils/globalfunction";
import axios from "axios";
import { AuthContext } from "../context/authcontext";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [stats, setStats] = useState({ users: 0, orders: 0, menu: 0 });

  if (!user) {
    return <h2 className="text-center mt-5">Loading Dashboard...</h2>;
  }

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(`${BASE_URL}/admin/stats`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setStats(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchStats();
  }, []);

  return (
    <div className="container mt-4">
      <h2>Welcome, {user.name}</h2>

      <div className="row mt-4">
        <div className="col-md-4">
          <div className="card text-white bg-primary mb-3">
            <div className="card-body">
              <h5 className="card-title">Total Users</h5>
              <p className="card-text">{stats.users}</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card text-white bg-success mb-3">
            <div className="card-body">
              <h5 className="card-title">Total Orders</h5>
              <p className="card-text">{stats.orders}</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card text-white bg-warning mb-3">
            <div className="card-body">
              <h5 className="card-title">Total Menu Items</h5>
              <p className="card-text">{stats.menu}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
