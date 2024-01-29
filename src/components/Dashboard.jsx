import React, { useState } from 'react';
import SideBAR from './SideBAR';
import LineChart from './LineChart';
import BarChart from './BarChart';
import './dashboard.css'
import axios from 'axios';
import CustomBarChart from './customBarChart';
const Dashboard = () => {
const [tstrength,setTStrength] = useState({strength:0})
const [tpresent,setPresent] = useState({present:0})
const [tabsent,setAbsent] = useState({absent:0})
const [tleave,setLeave] = useState({leaves:0})
const[lates,setlates] = useState({lates:0})
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
  }
  ApiCaller()
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
<CustomBarChart data={['First-Year-A',10,8,1,1,0]}/>
</div>

<div className='aabbcc'>
<CustomBarChart data={['First-Year-B',10,4,4,0,2]}/>
</div>

<div className='aabbcc'>
<CustomBarChart data={['Second-Year-A',10,1,6,2,1]}/>
</div>

</div>
<div className="row piece">

<div className='aabbcc'>
<CustomBarChart data={['Second-Year-B',10,7,1,1,1]}/>
</div>

<div className='aabbcc'>
<CustomBarChart data={['Third-Year-A',10,8,0,0,2]}/>
</div>

<div className='aabbcc'>
<CustomBarChart data={['Third-Year-B',10,3,4,1,2]}/>
</div>

</div>
</div>
</SideBAR>

  );
};

export default Dashboard;
