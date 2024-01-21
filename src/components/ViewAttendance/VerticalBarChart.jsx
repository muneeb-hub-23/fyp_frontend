import React from "react";
import {
Chart as ChartJS,
BarElement,
CategoryScale,
LinearScale,
Tooltip,
Legend
} from 'chart.js';
import { Bar } from "react-chartjs-2";

const VerticalBarChart = (props) => {
ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
)
  
var data1 = props.data;
  const data = {
    labels: ["Total Strength ("+data1[0]+")", "Total Present ("+data1[1]+")", "Total Absent ("+data1[2]+")", "Total Leave ("+data1[3]+")"],
    datasets: [
      {
        width: 50,
        label: "Class Overview",
        backgroundColor: ["#4CAF50", "#2196F3", "#F44336", "#FFC107"],
        data: data1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        stacked: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default VerticalBarChart;