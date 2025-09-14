// src/pages/MilkEntries.jsx
import { useState, useEffect } from "react";
import { http } from "../api/http";

export default function MilkEntries() {
  const [entries, setEntries] = useState([]);
  const [form, setForm] = useState({
    farmerName: "",
    date: "",
    liters: "",
    fat: "",
  });

  const loadEntries = async () => {
    const res = await http.get("/MilkEntries");
    setEntries(res.data);
  };

  const createEntry = async (e) => {
    e.preventDefault();
    await http.post("/MilkEntries", {
      farmerName: form.farmerName,
      date: form.date,
      liters: parseFloat(form.liters),
      fat: parseFloat(form.fat),
    });
    setForm({ farmerName: "", date: "", liters: "", fat: "" });
    loadEntries();
  };

  const deleteEntry = async (id) => {
    if (window.confirm("Are you sure you want to delete this entry?")) {
      await http.delete(`/MilkEntries/${id}`);
      loadEntries();
    }
  };

  useEffect(() => {
    loadEntries();
  }, []);

  return (
    <div className="container">
      <h2 className="page-title">Milk Entries</h2>

      {/* Form Card */}
      <div className="card form-card">
        <h3>Add New Entry</h3>
        <form onSubmit={createEntry} className="milk-form">
          <input
            type="text"
            placeholder="Farmer Name"
            value={form.farmerName}
            onChange={(e) => setForm({ ...form, farmerName: e.target.value })}
          />
          <input
            type="date"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
          />
          <input
            type="number"
            placeholder="Liters"
            value={form.liters}
            onChange={(e) => setForm({ ...form, liters: e.target.value })}
          />
          <input
            type="number"
            placeholder="Fat"
            value={form.fat}
            onChange={(e) => setForm({ ...form, fat: e.target.value })}
          />
          <button type="submit">Add Entry</button>
        </form>
      </div>

      {/* Table Card */}
      <div className="card table-card">
        <h3>Existing Entries</h3>
        <table className="styled-table">
          <thead>
            <tr>
              <th>Farmer Name</th>
              <th>Date</th>
              <th>Liters</th>
              <th>Fat</th>
              <th>Amount</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {entries.map((e) => (
              <tr key={e.id}>
                <td>{e.farmerName}</td>
                <td>{new Date(e.date).toLocaleDateString()}</td>
                <td>{e.liters}</td>
                <td>{e.fat}</td>
                <td>{e.amount}</td>
                <td>
                  <button
                    className="delete-btn"
                    onClick={() => deleteEntry(e.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {entries.length === 0 && (
              <tr>
                <td colSpan="6" style={{ textAlign: "center", color: "#777" }}>
                  No entries found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
