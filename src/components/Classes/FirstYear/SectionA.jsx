import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../../Users/DeleteUser.css";
import SideBAR from '../../SideBAR';

const SectionA = () => {
  const navigate = useNavigate();
  const handleClickforViewAttendence=()=>{
    console.log("Clicked ViewAttendence");
    navigate('/ViewAttendence/FirstSections')
    // console.log(navigate);
  };

  const handleClickforViewReports=()=>{
    console.log("Clicked ViewReports");
    navigate('/ViewAttendence/SecondSections')
    // console.log(navigate);
  };

  const handleClickforViewFine=()=>{
    console.log("Clicked ViewFine");
    navigate('/ViewAttendence/ThirdSections')
    // console.log(navigate);
  };

  const [students, setStudents] = useState([
    { id: 1, name: 'Ali Ismail' },
    { id: 2, name: 'Muneeb Baig aka (BACKEND)' },
    { id: 3, name: 'Hafiz Awais aka (HAFIZ SUSTI)' },
  ]);

  return (
    <div>
      <SideBAR>
        <div className='user_h'>
          <h1>1st YEAR</h1>
          <div className='user_Management'>
            <h2>SECTION A</h2>
            <ul className='users'>
              {students.map((students) => (
                <li key={students.id}>
                  {students.name}{' '}
                  <label>
                  <button id='btnA1' className='button' onClick={handleClickforViewAttendence}>View Attendence</button>
                  </label>
                  <label>
                  <button id='btnC1' className='button' onClick={handleClickforViewReports}>View Reports</button>
                  </label>
                  <label>
                  <button id='btnD1' className='button' onClick={handleClickforViewFine}>View Fine</button>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SideBAR>
    </div>
  );
}

export default SectionA;

