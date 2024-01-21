import React from "react";
import { Bar } from "react-chartjs-2";

const Chart = (props) => {
  const { total_strength, total_present, total_absent, total_leave } = props;

  const data = {
    labels: ["Total Strength", "Total Present", "Total Absent", "Total Leave"],
    datasets: [
      {
        label: "Class Overview",
        backgroundColor: ["#4CAF50", "#2196F3", "#F44336", "#FFC107"],
        data: [total_strength, total_present, total_absent, total_leave],
      },
    ],
  };

  const options = {
    scales: {
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

export default Chart;