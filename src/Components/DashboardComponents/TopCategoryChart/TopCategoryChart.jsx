import React from "react";
import "./TopCategoryChart.css";

export default function TopCategoryChart() {
  return (
    <div className="category-card">
      <div className="category-header">
        <div>
          <h3>Top category</h3>
          <p>Must booked rooms overview</p>
        </div>

       
      </div>

      <div className="chart-container">
        {/* Big Circle */}
        <div className="circle main">
          <h2>56%</h2>
          <span>Double room</span>
        </div>

        {/* Small Circles */}
        <div className="circle small left">
          <h3>30%</h3>
          <span>Single room</span>
        </div>

        <div className="circle small right">
          <h3>14%</h3>
          <span>Deluxe room</span>
        </div>
      </div>
    </div>
  );
}