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

const BarChart = (props) => {
ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
)
  
var data1 = props.data;
  const data = {
    labels: ['First-Year-A','First-Year-B','Second-Year-A','Second-Year-B','Third-Year-A','Third-Year-B'],
    datasets: [
      {
        width: 50,
        label: "Class Overview",
        backgroundColor: ['green','red','yellow','black','pink','gold'],
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

export default BarChart;