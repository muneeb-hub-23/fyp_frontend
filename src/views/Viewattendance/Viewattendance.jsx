import React, { useEffect, useState } from 'react';
import Chart from 'chart.js';
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import { apiaddress } from 'auth/apiaddress';
import './viewattendance.css'

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

function Viewattendance() {
const [classes,setClasses]=useState([])
const [sections,setSections] = useState([])
const [selectedValue, setSelectedValue] = useState({classn: '',section: '',session:''});
const [select,setselect] = useState({class1:"",section1:""})
const [students,setstudents] = useState([{roll_no:0,student_full_name:'null'}])
const [totaldays,settotaldays] = useState(0)
const [sessionsdate,setsessionsdate] = useState('0')
const user = localStorage.getItem('username')
const [sessions,setsessions] = useState([{session:0}])
const [runningstu,setrunningstu] = useState({})
const ApiCaller = async() => {
      const res1 = await postData(apiaddress+'/get-special-classes',{number:user})
      setClasses(res1)
      const res2 = await postData(apiaddress+'/get-special-sections',{number:user})
      setSections(res2)
      let a = res1[0]
      let b = res2[0]
      let c = a.class
      let d = b.section
      setSelectedValue({classn:c,section:d})
      const res3 = await postData(apiaddress+'/get-students-list',{class1:c,section1:d})
      setstudents(res3)
      setrunningstu(res3[0])
      const res4 = await postData(apiaddress+'/get-sessions',{hello:'true'})
      setsessions(res4)
      setSelectedValue({...selectedValue,session:res4[0].session})
      setsessionsdate(res4[0].startdate)
      const res5 = await postData(apiaddress+'/get-total-days',{sdate:res4[0].startdate,ldate:res4[0].enddate,stuadn:res3[0].admission_number})
      console.log(res5)
}

  useEffect(() => {
    const runit = async()=>{
      await ApiCaller()
    }
    runit()
    const originalDoughnutDraw = Chart.controllers.doughnut.prototype.draw;
    Chart.helpers.extend(Chart.controllers.doughnut.prototype, {
      draw: function() {
        const chart = this.chart;
        const {
          width,
          height,
          ctx,
          config
        } = chart.chart;

        const {
          datasets
        } = config.data;

        const dataset = datasets[0];
        const datasetData = dataset.data;
        const completed = datasetData[0];
        const text = `${completed}%`;
        let x, y, mid;

        originalDoughnutDraw.apply(this, arguments);

        const fontSize = (height / 80).toFixed(1);
        ctx.font = fontSize + "em Lato, sans-serif";
        ctx.textBaseline = "top";

        x = Math.round((width - ctx.measureText(text).width) / 2);
        y = (height / 2) - fontSize;
        ctx.fillStyle = "#000000"
        ctx.fillText(text, x, y);
        mid = x + ctx.measureText(text).width / 2;
      }
    });
    const createChart = (id, percent_value,color) => {
      var context = document.getElementById(id).getContext('2d');
      var chart = new Chart(context, {
        type: 'doughnut',
        data: {
          labels: [],
          datasets: [{
            label: 'First dataset',
            data: [percent_value, 100 - percent_value],
            backgroundColor: [color]
          }]
        },
        options: {}
      });

      return chart;
    };
    const chart1 = createChart('myChart1', 70,'#00a40e');
    const chart2 = createChart('myChart2',60, 'red');
    const chart3 = createChart('myChart3', 80,'#00acc1');
    const chart4 = createChart('myChart4', 60,'rgb(255, 89, 0)');
    return () => {
      // Cleanup charts
      chart1.destroy();
      chart2.destroy();
      chart3.destroy();
      chart4.destroy();
    };
  }, []);

  const handlesessionchange = async () => {
    setSelectedValue({...selectedValue,session:document.getElementById('session').value})
    for(var i=0; i<sessions.length; i++){
      if(sessions[i].session === document.getElementById('session').value){
        setsessionsdate(sessions[i].startdate)
      }
    }
  }

  return (
<>
<div className='a11'>

<GridContainer justify="center" alignItems="center">

<GridItem xs={12} sm={6} md={2}> 
<p className='viewdepname'>ICT DEPARTMENT</p>
</GridItem>
<GridItem xs={12} sm={6} md={1}>
  <select value={selectedValue.session} onChange={handlesessionchange} className='viewdepname' name="class" id="session">

  {sessions.map((session)=>(
      <option value={session.session}>{session.session}</option>
      ))}

  </select>
</GridItem>
<GridItem xs={12} sm={6} md={2}>
  <select className='viewdepname' name="class" id="class1">

      {students.map((student)=>(
      <option value={student.admission_number}>{student.roll_no}</option>
      ))}

  </select>
</GridItem>

<GridItem xs={12} sm={6} md={3}>
  <select className='viewdepname h2' name="class" id="class1">

  {students.map((student)=>(
      <option value={student.admission_number}>{student.student_full_name}</option>
      ))}

  </select>
</GridItem>
<GridItem xs={12} sm={6} md={2}>  
<select className='viewdepname' name="class" id="class1">

        
{classes.map((classes)=>(
                        <option value={classes.class}>{classes.class}</option>
                      ))}

</select>
</GridItem>
<GridItem xs={12} sm={6} md={2}> 
<select className='viewdepname' name="class" id="section1">

{sections.map((sections)=>(
                        <option value={sections.section}>{sections.section}</option>
                      ))}

</select>
</GridItem>
  
</GridContainer>
</div>

<div className='mainbody'>
<GridContainer justify="center" alignItems="center" spacing={1}>


<GridItem xs={12} sm={6} md={4}>
<div className="lmain">
<div className="ltext ee1">
<p className='bd2'>Joining</p>
<p className='bd2'>Date</p>
</div>
<div className="rtext">
<p className='bd3'>{runningstu.joining_date}</p>
</div>
</div>
</GridItem>

<GridItem xs={12} sm={6} md={4}>
<div className="lmain">
<div className="ltext ee2">
<p className='bd2'>Total</p>
<p className='bd2 bd4'>Days</p>
</div>
<div className="rtext">
  <p className='bd3 bd5'>{totaldays}</p>
</div>
</div>
</GridItem>

<GridItem xs={12} sm={12} md={4}>
<div className="lmain">
<div className="ltext ee3">

<p className='bd2'>Session</p>
<p className='bd2'>Start Date</p>

</div>
<div className="rtext">
<p className='bd3 bd6'>{sessionsdate}</p>
</div>
</div>
</GridItem>


</GridContainer>


<div className='chartsbody'>
<GridContainer justify="center" alignItems="center" spacing={1}>


<GridItem xs={12} sm={6} md={3}>
  <div className="cardst">
  <h3 className='hh3 hh4'>Total Present (09)</h3>
  <canvas className='doughnutchart' id="myChart1" />
  </div>

</GridItem>

<GridItem xs={12} sm={6} md={3}>
<div className="cardst">
  <h3 className='hh3 hh5'>Total Absent (4)</h3>
  <canvas className='doughnutchart' id="myChart2" />
  </div>
</GridItem>

<GridItem xs={12} sm={6} md={3}>
<div className="cardst">
  <h3 className='hh3 hh6'>Total Leaves (12)</h3>
  <canvas className='doughnutchart' id="myChart3" />
  </div>
</GridItem>

<GridItem xs={12} sm={6} md={3}>
<div className="cardst">
  <h3 className='hh3 hh7'>Total Lates (02)</h3>
  <canvas className='doughnutchart' id="myChart4" />
  </div>
</GridItem>


</GridContainer>
</div>

<div className="warnings">
<GridContainer justify="center" alignItems="center" spacing={1}>


<GridItem xs={12} sm={6} md={4}>
    <Card>
      <CardHeader color="info">
      <h5>First Warning</h5>
      </CardHeader>
      <CardBody>
      <p className='bd3'>23-09-2024</p>
      </CardBody>
    </Card>
</GridItem>

<GridItem xs={12} sm={6} md={4}>
<Card>
      <CardHeader color="primary">
      <h5>Second Warning</h5>
      </CardHeader>
      <CardBody>
      <p className='bd3'>23-09-2024</p>
      </CardBody>
    </Card>
</GridItem>

<GridItem xs={12} sm={12} md={4}>
<Card>
      <CardHeader color="danger">
      <h5>Third Warning</h5>
      </CardHeader>
      <CardBody>
      <p className='bd3'>23-09-2024</p>
      </CardBody>
    </Card>
</GridItem>


</GridContainer>
</div>

</div>
</>
  );
}

export default Viewattendance;
