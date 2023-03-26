import React from 'react';
import { Bubble } from 'react-chartjs-2';
import { Chart } from 'chart.js/auto';

function BubbleChart( {ChartData} ) {
  return (

    <Bubble data={ ChartData }  />

  )
}

export default BubbleChart