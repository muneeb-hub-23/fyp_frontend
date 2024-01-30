// import React from "react";
// import { Bar } from "react-chartjs-2";

// const customBarChart = (props) => {
//   const data1 = props.data;

//   const data = {
//     labels: [['s','p','a','l','lt'],['s','p','a','l','lt'],['s','p','a','l','lt'],['s','p','a','l','lt'],['s','p','a','l','lt'],['s','p','a','l','lt']],
//     datasets: [
//       {
//         label: "Class Overview",
//         backgroundColor: [['green', 'red', 'yellow', 'black', 'pink'],['green', 'red', 'yellow', 'black', 'pink'],['green', 'red', 'yellow', 'black', 'pink'],['green', 'red', 'yellow', 'black', 'pink'],['green', 'red', 'yellow', 'black', 'pink'],['green', 'red', 'yellow', 'black', 'pink',]],
//         data: [
//           [data1[0], data1[1], data1[2], data1[3], data1[4]],
//           [data1[5], data1[6], data1[7], data1[8], data1[9]],
//           [data1[10], data1[11], data1[12], data1[13], data1[14]],
//           [data1[15], data1[16], data1[17], data1[18], data1[19]],
//           [data1[20], data1[21], data1[22], data1[23], data1[24]],
//           [data1[25], data1[26], data1[27], data1[28], data1[29]],
//         ],
//       },
//     ],
//   };

//   const options = {
//     scales: {
//       x: {
//         stacked: true,
//       },
//       y: {
//         beginAtZero: true,
//       },
//     },
//   };

//   return (
//     <div>
//       <Bar data={data} options={options} />
//     </div>
//   );
// };

// export default customBarChart;



// import React from "react";
// import { Bar } from "react-chartjs-2";
// import {
//     Chart as ChartJS,
//     BarElement,
//     CategoryScale,
//     LinearScale,
//     Tooltip,
//     Legend
//     } from 'chart.js';
// const CustomBarChart = (props) => {
//     ChartJS.register(
//         BarElement,
//         CategoryScale,
//         LinearScale,
//         Tooltip,
//         Legend
//       )
//   const data1 = props.data;

//   const data = {
//     labels: ['s','p','a','l','lt','s','p','a','l','lt','s','p','a','l','lt','s','p','a','l','lt','s','p','a','l','lt','s','p','a','l','lt'],
//     datasets: [
//       {
//         height:30,
//         label: "Class Overview",
//         backgroundColor: ['green', 'red', 'yellow', 'black', 'pink','green', 'red', 'yellow', 'black', 'pink','green', 'red', 'yellow', 'black', 'pink','green', 'red', 'yellow', 'black', 'pink','green', 'red', 'yellow', 'black', 'pink','green', 'red', 'yellow', 'black', 'pink',],
//         data: data1,
//       },
//     ],
//   };

//   const options = {
//     scales: {
//       x: {
//         stacked: true,
//       },
//       y: {
//         beginAtZero: true,
//       },
//     },
//   };

//   return (

//     <div style={{ height: "400px", width: "600px" }}>
//       <Bar data={data} options={options} />
//     </div>
//   );
// };

// export default CustomBarChart;

import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

const CustomBarChart = (props) => {
  ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
  );
  const data1 = props.data;


//   const data = {
//     width:50,
//     labels: originalLabels,
//     datasets: [
//       {
//         label: "Class Overview",
//         backgroundColor: [
//           "black",
//           "green",
//           "red",
//           "blue",
//           "orange",
//           "black",
//           "green",
//           "red",
//           "blue",
//           "orange",
//           "black",
//           "green",
//           "red",
//           "blue",
//           "orange",
//           "black",
//           "green",
//           "red",
//           "blue",
//           "orange",
//           "black",
//           "green",
//           "red",
//           "black",
//           "orange",
//           "black",
//           "green",
//           "red",
//           "blue",
//           "orange",
//         ],
//         data: data1,
//       },
//     ],
//   };

const data = {
    labels: ['Str ('+data1[1]+')','Pr ('+data1[2]+')','Ab ('+data1[3]+')','L ('+data1[4]+')','LT ('+data1[5]+')'],
    datasets: [
      {
        label: data1[0],
        data: [data1[1],data1[2],data1[3],data1[4],data1[5]],
        borderColor: 'black',
        backgroundColor: ['black','rgb(140, 233, 0)','red','rgb(4, 166, 253)','rgba(253, 170, 4, 0.652)'],
      }
    ]
  };

//   const options = {
//     scales: {
//       x: {
//         stacked: true,
//       },
//       y: {
//         beginAtZero: true,
//       },
//     },
//     // Adjust the width of the bars by setting barThickness
//     layout: {
//       padding: {
//         left: 10,
//         right: 10,
//         top: 10,
//         bottom: 10,
//       },
//     },
//     indexAxis: "x", // Use 'x' for horizontal bars
//     barThickness: 15, // Custom value for bar width
//     barCategoryGap: 15
//   };
  const options = {
    type: 'bar',
    data: data,
    devicePixelRatio:2,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Chart.js Bar Chart'
        }
      }
    },
  };
  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default CustomBarChart;

