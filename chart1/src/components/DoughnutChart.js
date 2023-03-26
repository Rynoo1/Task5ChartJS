import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart } from 'chart.js/auto';

function DoughnutChart ( {ChartData} ) {
  return (

    <Doughnut data={ ChartData }  />

  )
}

export default DoughnutChart