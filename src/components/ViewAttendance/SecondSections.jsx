// components/ViewAttendance/FirstSections.js
import React from 'react';
import SideBAR from '../SideBAR';
import "../../index.css";
import { useNavigate } from 'react-router-dom';

const SecondSections = () => {
  const navigate = useNavigate();
  const handleClickforA=()=>{
    console.log("Clicked Sec A");
    navigate('/ViewAttendence/SecondSections/SecondSectionA')
    // console.log(navigate);
  };

  const handleClickforB=()=>{
    console.log("Clicked Sec B");
    navigate('/ViewAttendence/SecondSections/SecondSectionB')
    // console.log(navigate);
  };
  return (
    <div>
      <SideBAR>
        <h1>ViewAttendence</h1>
        <div className='VA_main'>
          <div className='classes' id='sectionA' onClick={handleClickforA}>Section A</div>
          <div className='classes' id='sectionB' onClick={handleClickforB}>Section B</div>
        </div>
      </SideBAR>
    </div>
  )
}

export default SecondSections;

