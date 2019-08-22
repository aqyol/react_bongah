import React from 'react';
import { FaBell, FaChartBar, FaSlidersH } from 'react-icons/fa';

const Details = () => (
  <div className="details">
    <div className="detailTab">
      <ul>
        <li className="active"><a href="#1"><FaBell /> Activities</a></li>
        <li><a href="#1"><FaChartBar /> Statistics</a></li>
        <li><a href="#1"><FaSlidersH /> Sumary</a></li>
      </ul>
    </div>
    <div className="detailBody">
      {}
    </div>
  </div>
);

export default Details;
