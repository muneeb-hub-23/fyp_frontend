import React, { useState } from 'react';
import SideBAR from './SideBAR';
import LineChart from './LineChart';
import BarChart from './BarChart';
import './dashboard.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
import CustomBarChart from './customBarChart';
const Dashboard = () => {
const [tstrength,setTStrength] = useState({strength:0})
const [tpresent,setPresent] = useState({present:0})
const [tabsent,setAbsent] = useState({absent:0})
const [tleave,setLeave] = useState({leaves:0})
const[lates,setlates] = useState({lates:0})
const[data,setData] = useState([[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]])
  const ApiCaller = async ()=>{
    try{
      const response = await axios.post('http://localhost:80/today-ict-strength', []);
      setTStrength(response.data)
    }catch (err){
      console.log(err)
    }
    try{
      const response = await axios.post('http://localhost:80/today-ict-present', []);
      setPresent(response.data)
    }catch (err){
      console.log(err)
    }
    try{
      const response = await axios.post('http://localhost:80/today-ict-absent', []);
      setAbsent(response.data)
    }catch (err){
      console.log(err)
    }
    try{
      const response = await axios.post('http://localhost:80/today-ict-leave', []);
      setLeave(response.data)
    }catch (err){
      console.log(err)
    }
    try{
      const response = await axios.post('http://localhost:80/today-ict-lates', []);
      setlates(response.data)
      
    }catch (err){
      console.log(err)
    }
    try{
      const response = await axios.post('http://localhost:80/dashboard-charts', []);
      setData(response.data)
      
    }catch (err){
      console.log(err)
    }
  }
  ApiCaller()
  var daba1 = data[0]
  var daba2 = data[1]
  var daba3 = data[2]
  var daba4 = data[3]
  var daba5 = data[4]
  var daba6 = data[5]
  return (

<SideBAR>

<div className="container">
<div className="row piece">
<div className='col-lg'>

<div className="row">

<div className="col-sm center">
<h3 className='written'>Total Strength</h3>
<div className="custom strength">{tstrength.strength}</div>
</div>

<div className="col-sm center">
<h3 className='written'>Total Present</h3>
<div className="custom present">{tpresent.present}</div>
</div>

<div className="col-sm center">
<h3 className='written'>Total Absent</h3>
<div className="custom absent">{tabsent.absent}</div>
</div>

<div className="col-sm center">
<h3 className='written'>Total Leaves</h3>
<div className="custom leave">{tleave.leaves}</div>
</div>

<div className="col-sm center">
<h3 className='written'>Total Lates</h3>
<div className="custom late">{lates.lates}</div>
</div>

</div>




  
</div>
</div>
<div className="row piece">

<div className='aabbcc'>
<Link to={'/expand-bar-chart/1st-year/a'}>
<CustomBarChart data={['First-Year-A',daba1[0],daba1[1],daba1[2],daba1[3],daba1[4]]} />
</Link></div>

<div className='aabbcc'>
<Link to={'/expand-bar-chart/1st-year/b'}>
<CustomBarChart data={['First-Year-B',daba2[0],daba2[1],daba2[2],daba2[3],daba2[4]]}/>
</Link></div>

<div className='aabbcc'>

<Link to={'/expand-bar-chart/2nd-year/a'}>
<CustomBarChart data={['Second-Year-A',daba3[0],daba3[1],daba3[2],daba3[3],daba3[4]]}/>
</Link></div>

</div>
<div className="row piece">

<div className='aabbcc'>
<Link to={'/expand-bar-chart/2nd-year/b'}>
<CustomBarChart data={['Second-Year-B',daba4[0],daba4[1],daba4[2],daba4[3],daba4[4]]}/>
</Link></div>

<div className='aabbcc'>
<Link to={'/expand-bar-chart/3rd-year/a'}>
<CustomBarChart data={['Third-Year-A',daba5[0],daba5[1],daba5[2],daba5[3],daba5[4]]}/>
</Link></div>

<div className='aabbcc'>

<Link to={'/expand-bar-chart/3rd-year/b'}>
<CustomBarChart data={['Third-Year-B',daba6[0],daba6[1],daba6[2],daba6[3],daba6[4]]}/>
</Link></div>

</div>
</div>
</SideBAR>

  );
};

export default Dashboard;
