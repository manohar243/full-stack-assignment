// src/pages/TotalSale.jsx
import { useEffect, useState } from "react";
import { http } from "../api/http";

export default function TotalSale() {
  const [summary, setSummary] = useState({
    totalLiters: 0,
    avgFat: 0,
    totalAmount: 0,
  });

  useEffect(() => {
    http.get("/MilkEntries").then((res) => {
      const entries = res.data;
      const totalLiters = entries.reduce((sum, e) => sum + e.liters, 0);
      const avgFat =
        entries.length > 0
          ? entries.reduce((sum, e) => sum + e.fat, 0) / entries.length
          : 0;
      const totalAmount = entries.reduce((sum, e) => sum + e.amount, 0);
      setSummary({ totalLiters, avgFat, totalAmount });
    });
  }, []);

  return (
    <div className="container">
      <h2 className="page-title">Total Sale Summary</h2>
      <div className="total-sale-cards">
        <div className="card">
          <h3>Total Milk Procured</h3>
          <p>{summary.totalLiters.toFixed(2)} Liters</p>
        </div>
        <div className="card">
          <h3>Average Fat</h3>
          <p>{summary.avgFat.toFixed(2)}%</p>
        </div>
        <div className="card">
          <h3>Total Amount Paid</h3>
          <p>₹ {summary.totalAmount.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}
