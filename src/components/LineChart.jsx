import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Legend,
    Filler,
} from 'chart.js'
import { useState,useEffect } from "react";
import axios from "axios";

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Legend,
    Filler
)
function LineChart(props){
    const [years, setYears] = useState([]);
    const [dataa, setData] = useState([]);
  useEffect(() => {
    const currentYear = new Date().getFullYear();
    const startingYear = 2022;

    const yearList = Array.from({ length: currentYear - startingYear + 1 }, (_, index) => startingYear + index);

    setYears(yearList);
  }, []);
    function getCurrentMonth() {
        // Get the current date
        const currentDate = new Date();
      
        // Get the month number (0-based index)
        const currentMonthNumber = currentDate.getMonth();
      
        // Define an array of month names
        const monthNames = [
          'January', 'February', 'March', 'April',
          'May', 'June', 'July', 'August',
          'September', 'October', 'November', 'December'
        ];
      
        // Get the month name for the current month
        const currentMonthName = monthNames[currentMonthNumber];
      
        return currentMonthName;
      }
    function getDaysInMonth(monthName, year) {
        const monthNames = [
          'January', 'February', 'March', 'April',
          'May', 'June', 'July', 'August',
          'September', 'October', 'November', 'December'
        ];
      
        const monthNumber = monthNames.indexOf(monthName);
      
        if (monthNumber === -1) {
          console.error('Invalid month name');
          return [];
        }
      
        const firstDay = new Date(year, monthNumber, 1);
        const lastDay = new Date(year, monthNumber + 1, 0);
      
        const daysArray = [];
      
        for (let date = firstDay; date <= lastDay; date.setDate(date.getDate() + 1)) {
          // Push only the day number to the array
          daysArray.push(date.getDate());
        }
      
        return daysArray;
      }
      function getCurrentYear() {
        // Get the current date
        const currentDate = new Date();
      
        // Get the current year
        const currentYear = currentDate.getFullYear();
      
        return currentYear;
      }

const [monthName,setMonthName] = useState(getCurrentMonth()); 
const [selectedYear, setSelectedYear] = useState(getCurrentYear());

useEffect(() => {
  // Get the current year
  const currentYear = new Date().getFullYear();

  // Generate an array of years from 2000 to the current year
  const yearOptions = Array.from({ length: currentYear - 1999 }, (_, index) => 2000 + index);

  // Set the years in the state
  setYears(yearOptions);

  // Set the selected year to the current year
  setSelectedYear(currentYear.toString());
}, []);

const handleYearChange = (event) => {
  setSelectedYear(event.target.value);
};
const handleMonthChange = async (event) => {
    setMonthName(event.target.value);

  };

  const ApiCaller = async () => {
 
    try {
      const response = await axios.post('http://localhost:80/convertmonthandyeartoprogress',[monthName,selectedYear]);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
 
}
ApiCaller()

    const data = {
        labels: getDaysInMonth(monthName,selectedYear),
        datasets:[{
            label:'First-year A',
            data:dataa[0],
            borderColor: 'black',
            pointBorderColor: 'black',
            fill:true
        },{
            label:'First-Year B',
            data:dataa[1],
            borderColor: 'blue',
            pointBorderColor: 'blue',
            fill:true
        },{
            label:'Second-Year A',
            data:dataa[2],
            borderColor: 'red',
            pointBorderColor: 'red',
            fill:true,
            tension:0.1
        },{
          label:'Second-Year B',
          data:dataa[3],
          borderColor: 'green',
          pointBorderColor: 'green',
          fill:true
      },{
          label:'Third-Year A',
          data:dataa[4],
          borderColor: 'pink',
          pointBorderColor: 'pink',
          fill:true
      },{
          label:'Third-year B',
          data:dataa[5],
          borderColor: 'gold',
          pointBorderColor: 'gold',
          fill:true,
          tension:0.1
      }]
    }
    const options = {
        maintainAspectRatio: false,
        plugins:{
            legend:true
        },
        scales:{
            yy:{
                min:0,
                max:100
            }
        }
    }

    return(

<div style={{height:'32vh',width:'100%',margin:'15px auto 10px',border:'1px solid black',padding:'20px'}}>
        <select name="month" id="month" value={monthName} onChange={handleMonthChange}>
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">Jun</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
        </select>

        <select id="year" name="year" value={selectedYear} onChange={handleYearChange}>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
        <Line data = {data} options={options} />
        </div>
    )
}
export default LineChart;