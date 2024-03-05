import React, { useEffect, useState } from 'react';
import GridContainer from 'components/Grid/GridContainer'
import GridItem from 'components/Grid/GridItem'
import Chart from 'chart.js';
import '../Viewattendance/viewattendance.css'
import { apiaddress } from 'auth/apiaddress';
import { duration } from '@material-ui/core';
function getTodayDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  
  return `${year}-${month}-${day}`;
}
function getDatesByPeriod(period) {
  const today = new Date();
  let startDate, endDate;

  switch (period) {
      case 'thisweek':
          startDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getDay() + (today.getDay() === 0 ? -6 : 1));
          endDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + (5 - today.getDay()));
          break;
      case 'lastweek':
          startDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getDay() - 6);
          endDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getDay() - 2);
          break;
      case 'thismonth':
          startDate = new Date(today.getFullYear(), today.getMonth(), 1);
          endDate = new Date(today.getFullYear(), today.getMonth() + 1, 0);
          break;
      case 'lastmonth':
          startDate = new Date(today.getFullYear(), today.getMonth() - 1, 1);
          endDate = new Date(today.getFullYear(), today.getMonth(), 0);
          break;
      case 'thisyear':
          startDate = new Date(today.getFullYear(), 0, 1);
          endDate = new Date(today.getFullYear(), 11, 31);
          break;
      case 'lastyear':
          startDate = new Date(today.getFullYear() - 1, 0, 1);
          endDate = new Date(today.getFullYear() - 1, 11, 31);
          break;
      default:
          return [];
  }

  const dates = [];
  let currentDate = startDate;
  while (currentDate <= endDate) {
      if (currentDate.getDay() !== 0 && currentDate.getDay() !== 6) {
          const year = currentDate.getFullYear();
          const month = String(currentDate.getMonth() + 1).padStart(2, '0');
          const day = String(currentDate.getDate()).padStart(2, '0');
          dates.push(`d${year}${month}${day}`);
      }
      currentDate.setDate(currentDate.getDate() + 1);
  }

  return dates;
}
function getDatesInRange(startDateStr, endDateStr) {
  const startDate = new Date(startDateStr);
  const endDate = new Date(endDateStr);
  
  const dates = [];
  let currentDate = startDate;
  
  while (currentDate <= endDate) {
      if (currentDate.getDay() !== 0 && currentDate.getDay() !== 6) {
          const year = currentDate.getFullYear();
          const month = String(currentDate.getMonth() + 1).padStart(2, '0');
          const day = String(currentDate.getDate()).padStart(2, '0');
          dates.push(`d${year}${month}${day}`);
      }
      currentDate.setDate(currentDate.getDate() + 1);
  }
  
  return dates;
}
async function postData(url, data) {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const responseData = await response.json();
    // console.log('Response:', responseData);
    return responseData;
  } catch (error) {
    console.error('Error:', error.message);
  }
}
function DepartmentWiseReport() {
const getvalue = getTodayDate()
const [dates,setDates] = useState({sdate:getvalue,ldate:getvalue})
const [selectedValue,setSelectedValue] = useState({crietaria:'daily',duration:'thisweek'})
const [att,setAtt] = useState({str:0,p:0,a:0,l:0,lt:0})

const CallApi = async () => {
  const labeld = []
  const presentd = []
  const absentd = []
  const leaved = []
  const lated = []
  const datasetd = [
    
{
label: 'Present',
data: presentd,
backgroundColor: [
'rgba(0,255,0,0.2)'
],
borderColor: [
'black'
],
borderWidth: 1
},
{
label: 'Absent',
data: absentd,
backgroundColor: [
'rgba(255, 99, 132, 0.2)'
],
borderColor: [
'black'
],
borderWidth: 1
},
{
label: 'Leave',
data: leaved,
backgroundColor: [
'rgba(0,0,215, 0.2)'
],
borderColor: [
'black'
],
borderWidth: 1
},
{
label: 'Late',
data: lated,
backgroundColor: [
'rgba(255, 150, 0, 0.2)'
],
borderColor: [
'black'
],
borderWidth: 1
}

]
  if(selectedValue.duration === 'custom'){
  const datesd = await getDatesInRange(dates.sdate,dates.ldate)
  const response = await postData(apiaddress+'/department-report',{crietaria:selectedValue.crietaria,duration:selectedValue.duration,dates:datesd})
  console.log(response)
  }else{
  const datesd = await getDatesByPeriod(selectedValue.duration)
  const response = await postData(apiaddress+'/department-report',{crietaria:selectedValue.crietaria,duration:selectedValue.duration,dates:datesd})
  console.log(response)
}

  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: labeld,
          datasets: datasetd
      },
      options: {
          responsive:false,
          maintainAspectRatio:false,
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
      }
  });


} 

const handlecrietaria = async (e) => {
  setSelectedValue({...selectedValue,crietaria:e.target.value})

}
const handlesdate = async (e) => {
setDates({...dates,sdate:e.target.value})
}
const handleldate = async (e) => {
  setDates({...dates,ldate:e.target.value})
}
const handleduration = async (e) => {
  setSelectedValue({...selectedValue,duration:e.target.value})
  if(e.target.value === 'custom'){
    document.getElementById('sdate').disabled = false
    document.getElementById('ldate').disabled = false
  }else{
    document.getElementById('sdate').disabled = true
    document.getElementById('ldate').disabled = true
  }
}



  return (
    <>
<div className='a11'>
<GridContainer justify="center" alignItems="center">



<GridItem xs={12} sm={4} md={2}> 
<p className='viewdepname'>ICT DEPARTMENT</p>
</GridItem>

<GridItem xs={12} sm={4} md={2}>
<select id='crietaria' className='viewdepname' value={selectedValue.crietaria} onChange={handlecrietaria}>
  <option value="daily">Daily</option>
  <option value="weekly">Weekly</option>
  <option value="monthly">Monthly</option>
  <option value="yearly">Yearly</option>
</select>
</GridItem>

<GridItem xs={12} sm={4} md={2}>
<select id='duration' className='viewdepname' value={selectedValue.duration} onChange={handleduration}> 
<option value="thisweek">This Week</option>
<option value="lastweek">Last Week</option>
<option value="thismonth">This Month</option>
<option value="lastmonth">Last Month</option>
<option value="thisyear">This Year</option>
<option value="lastyear">Last Year</option>
<option value="custom">Custom</option>


</select>
</GridItem>

<GridItem xs={12} sm={4} md={2}>
<input type='date' id='sdate' max={getvalue} value={dates.sdate} onChange={handlesdate} className='viewdepname' disabled/>
</GridItem>

<GridItem xs={12} sm={4} md={2}>  
<input type='date' id='ldate' max={getvalue} value={dates.ldate} onChange={handleldate} className='viewdepname' disabled/>
</GridItem>

<GridItem xs={12} sm={4} md={2}> 
<p className='viewdepname' onClick={CallApi} style={{cursor:'pointer',border:'1px solid green',backgroundColor:'rgba(0,255,0,0.2)'}}>Show</p>
</GridItem>
  


</GridContainer>
</div>

<div className="mainbody">
<GridContainer justify="center" alignItems="center">

  
<GridItem xs={12} sm={12} md={12}> 

<GridContainer justify="center" alignItems="center">

<GridItem xs={12} sm={12} md={2}> 
<div className="deltabox strngth">
<h4>Total Strength</h4>
<h1>{att.str}</h1>

</div>
</GridItem>
<GridItem xs={12} sm={6} md={2}> 
<div className="deltabox prsnt">
<h4>Total Present</h4>
<h1>{att.p}%</h1>

</div>
</GridItem>
<GridItem xs={12} sm={6} md={2}> 
<div className="deltabox absnt">
<h4>Total Absent</h4>
<h1>{att.a}%</h1>

</div>
</GridItem>
<GridItem xs={12} sm={6} md={2}> 
<div className="deltabox lve">
<h4>Total Leave</h4>
<h1>{att.l}%</h1>

</div>
</GridItem>
<GridItem xs={12} sm={6} md={2}> 
<div className="deltabox lte">
<h4>Total Late</h4>
<h1>{att.lt}%</h1>

</div>
</GridItem>

</GridContainer>

</GridItem>


<GridItem xs={12} sm={12} md={12}> 
<div className="piecapsule">
<canvas className='piechart' id="myChart" />
</div>


</GridItem>

</GridContainer>
</div>


</>
  )
}

export default DepartmentWiseReport
