import React, { useEffect, useState } from 'react';
import GridContainer from 'components/Grid/GridContainer'
import GridItem from 'components/Grid/GridItem'
import Chart from 'chart.js';
import '../Viewattendance/viewattendance.css'
import { apiaddress } from 'auth/apiaddress';
import { postData } from 'auth/datapost';
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
function StudentWiseReport() {
const [runningstu,setrunningstu] = useState({admission_number:0})
const [students,setstudents] = useState([{roll_no:0,student_full_name:'null'}])
const [select,setselect] = useState({roll_no:0,name:'null'})
const [classes,setClasses]=useState([])
const [sections,setSections] = useState([])
const [stdval,setstdval] = useState({classn:'',section:''})
const getvalue = getTodayDate()
const [dates,setDates] = useState({sdate:getvalue,ldate:getvalue})
const [selectedValue,setSelectedValue] = useState({crietaria:'daily',duration:'thisweek'})
const [att,setAtt] = useState({str:0,p:0,a:0,l:0,lt:0})
const user = localStorage.getItem('username')
const [metadata,setmetadata] = useState({
  totaldays: 51,
  totalp: 34,
  totala: 12,
  totall: 3,
  totallt: 2,
  firstwarning: "Expecting",
  secondwarning: "Expecting",
  thirdwarning: "Expecting"
})

const CallApi = async () => {


  var labeld = []
  var presentd = []
  var absentd = []
  var leaved = []
  var lated = []

  const an = document.getElementById('class1').value
  const bn = document.getElementById('section1').value

  if(selectedValue.duration === 'custom'){
  const datesd = await getDatesInRange(dates.sdate,dates.ldate)
  const re = await postData(apiaddress+'/student-report',{crietaria:selectedValue.crietaria,duration:selectedValue.duration,dates:datesd,admission_number:runningstu.admission_number})
  setAtt({str:re.tstr,p:re.tp,a:re.ta,l:re.tl,lt:re.tlt})
  labeld = re.labels
  setAtt({str:re.tstr,p:re.tp,a:re.ta,l:re.tl,lt:re.tlt})
  console.log(re)
  }else{
  const datesd = await getDatesByPeriod(selectedValue.duration)
  const re = await postData(apiaddress+'/student-report',{crietaria:selectedValue.crietaria,duration:selectedValue.duration,dates:datesd,admission_number:runningstu.admission_number})
  labeld = re.labels
  console.log(re)
  setAtt({str:re.tstr,p:re.tp,a:re.ta,l:re.tl,lt:re.tlt})
 labeld = re.labels
 presentd=re.presentd
 absentd = re.absentd
 leaved = re.leaved
 lated = re.lated
}
document.getElementById('myChart').value = ''
  var datasetd = [
    {
    label: 'Present',
    data: presentd,
    backgroundColor: [
    'rgba(0,255,0,0.2)'
    ],
    borderColor: [
    'rgba(0,255,0,1)'
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
      'rgba(255, 99, 132, 1)'
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
      'rgba(0,0,215, 1)'
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
      'rgba(255, 150, 0, 1)'
    ],
    borderWidth: 1
    }
    ]

    var ctx =await document.getElementById('myChart').getContext('2d');
    ctx.clearRect(0,0,100,100);
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labeld,
            datasets: datasetd
        },
        options: {
            responsive:true,
            maintainAspectRatio:true,
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

const Apiforclasssec = async () => {
  const res1 = await postData(apiaddress+'/get-special-classes',{number:user})
  setClasses(res1)
  const res2 = await postData(apiaddress+'/get-special-sections',{number:user})
  setSections(res2)
  let a = res1[0]
  let b = res2[0]
  let c = a.class
  let d = b.section
  const res3 = await postData(apiaddress+'/get-students-list',{class1:c,section1:d})
  setstudents(res3)
  setselect({roll_no:res3[0].admission_number,name:res3[0].student_full_name})
  setrunningstu(res3[0])
  
}
useEffect(()=>{

  Apiforclasssec()
  
},[])

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

const handleclasschange = async (e) => {
setstdval({...stdval,classn:e.target.value})
}
const handlesectionchange = async (e) => {
setstdval({...stdval,section:e.target.value})
}
const handlestuchange = async (e) => {
  var namee = ''
  for(var i=0; i<students.length; i++){
    if((students[i].admission_number).toString() === (e.target.value).toString()){
      namee = students[i].admission_number
    }
  }
  setselect({
    roll_no:e.target.value,
    name:namee
  })

  const val = e.target.value
  for (var i=0; i<students.length; i++){
    if((students[i].admission_number).toString() === val.toString() | (students[i].student_full_name).toString() === val.toString()){
      setrunningstu(students[i])
 
    }

  }

}
const handlestuchange1 = async (e) => {
  
  var rolee = ''
  for(var i=0; i<students.length; i++){
    if((students[i].roll_no).toString() === (e.target.value).toString()){
      rolee = students[i].student_full_name

    }
  }

  setselect({
    roll_no:e.target.value,
    student_full_name:rolee
  })

  const val = e.target.value

  for (var i=0; i<students.length; i++){
    if((students[i].admission_number).toString() === val.toString() | (students[i].student_full_name).toString() === val.toString()){
      setrunningstu(students[i])

    }

  }

}

  return (
    <>
<div className='a11'>
<GridContainer justify="center" alignItems="center">



<GridItem xs={12} sm={4} md={3}>  
<select className='viewdepname' name="class" id="class1" onChange={handleclasschange}>

        
{classes.map((classes)=>(
                        <option value={classes.class}>{classes.class}</option>
                      ))}

</select>
</GridItem>

<GridItem xs={12} sm={4} md={3}> 
<select className='viewdepname' name="class" id="section1" onChange={handlesectionchange}>

{sections.map((sections)=>(
                        <option value={sections.section}>{sections.section}</option>
                      ))}

</select>
</GridItem>

<GridItem xs={12} sm={4} md={3}>
  <select className='viewdepname h2' name="class" id="name" value={select.name} onChange={handlestuchange1}>

  {students.map((student)=>(
      <option value={student.admission_number}>{student.student_full_name}</option>
      ))}

  </select>
</GridItem>

<GridItem xs={12} sm={4} md={2}>
  <select className='viewdepname' name="class" id="roll_no" value={select.roll_no} onChange={handlestuchange}>

      {students.map((student)=>(
      <option value={student.admission_number}>{student.roll_no}</option>
      ))}

  </select>
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
<h4>Total Days</h4>
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

export default StudentWiseReport