import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/globalfunction";

const Reports = () => {
  const [reportData, setReportData] = useState([]);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(`${BASE_URL}/admin/reports`, { headers: { Authorization: `Bearer ${token}` } });
        setReportData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchReports();
  }, []);

  return (
    <div className="container mt-4">
      <h2>Reports</h2>
      <table className="table table-bordered mt-3">
        <thead className="table-dark">
          <tr>
            <th>Report ID</th>
            <th>Type</th>
            <th>Data</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {reportData.map(r => (
            <tr key={r._id}>
              <td>{r._id}</td>
              <td>{r.type}</td>
              <td>{r.details}</td>
              <td>{new Date(r.createdAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Reports;
