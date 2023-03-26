import './App.css';
import Barchart from './components/Barchart';
import UserData from './data.js'
import { useState, useEffect } from 'react';
import LineChart from './components/LineChart';
import PieChart from './components/PieChart';
import axios from "axios";
import { Link } from "react-router-dom";
import React from 'react';
import BubbleChart from './components/BubbleChart';
import DoughnutChart from './components/DoughnutChart';


function App() {

  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [{
      label: 'Users Gained',
      data: UserData.map((data) => data.userGain),
      tension: 0.4
    }]
  });


  return (
    <div className="App" style={{ width: 600 }}>
      <Barchart ChartData={userData} />
      <LineChart ChartData={userData} />
      <PieChart ChartData={userData} />
      <BubbleChart ChartData={userData} />
      <DoughnutChart ChartData={userData} />
    </div>
  );
}
export default App;