import React from 'react';
import SideBAR from './SideBAR';
import LineChart from './LineChart';
const Dashboard = () => {
  return (
    <div>
      <SideBAR>
        <h1>Dashboard</h1>
        <div className="container">
        <div className="row">
        <div className='col-lg' style={{width:'35%',height:'40vh',border:'1px solid black',margin:'10px'}}>
<h1>Today ICT</h1>
        </div>
        <div className='col-lg' style={{width:'35%',height:'40vh',border:'1px solid black',margin:'10px'}}>
          <h1>Top Class</h1>
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
