import React, { useState } from 'react';
import SideBAR from './SideBAR';
import LineChart from './LineChart';
import BarChart from './BarChart';
import './dashboard.css'
import axios from 'axios';
const Dashboard = () => {
const [tstrength,setTStrength] = useState({})
const [tpresent,setPresent] = useState({})
const [tabsent,setAbsent] = useState({})
const [tleave,setLeave] = useState({})
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
    <div>
      <SideBAR>
        <h1>Dashboard</h1>
        <div className="container">
        <div className="row">
          <table style={{margin:'5px 10px 5px 10pxs'}}>
            <tr>
         <td style={{width:'43vw'}}><h3 style={{textAlign:'left'}}>Today ICT</h3></td>
          <td><h3 style={{textAlign:'left'}}>Top Performing Class</h3></td>
          <td>
            <select name="" id="">
              <option value="today">Today</option>
              <option value="yesterday">Yesterday</option>
              <option value="this_week">This Week</option>
              <option value="last_week">Last Week</option>
              <option value="this_month">This Month</option>
              <option value="last_month">Last Month</option>
              <option value="this_year">This Year</option>
              <option value="last_year">Last Year</option>
              <option value="all_time">All Time</option>
            </select>
            
            </td>
          </tr>
          </table>
        <div className='col-lg' style={{width:'30vh',height:'45vh',border:'1px solid black',margin:'10px'}}>

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

        </div>




          
        </div>
  
        <div className='col-lg' style={{width:'30vh',height:'45vh',border:'1px solid black',margin:'10px'}}>
        <BarChart data={[50,30,80,40,40,70]}/>
        </div>
        </div>
        <div className="row">
        <div className='col-lg'>
        <LineChart />
        </div>
        </div>
        </div>

      </SideBAR>
    </div>
  );
};

export default Dashboard;
