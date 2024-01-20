import React, { useState } from 'react';
import SideBAR from '../SideBAR';
import "../Users/DeleteUser.css";
import axios from 'axios';


const DeleteFirstA = () => {

  const [students, setData] = useState([]);
  const [selectedValue, setSelectedValue] = useState({classn:'1st-year',section:'a'});


const ApiCallerr = async () => {
 
   
      try {
        const response = await axios.post('http://localhost:80/get-students-list',selectedValue);
        setData(response.data);
      } catch (error) {
        console.error('Error making POST request:', error);
      }
   
}

const handleDropdownChange = (event) => {
   setSelectedValue({classn:document.getElementById('classn').value,section:document.getElementById('section').value});
};


ApiCallerr();

  const handleDeleteStudents = (studentId) => {

    const ApiCaller = async (value) => {

    try {
      const response = await fetch('http://localhost:80/delete-student', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ value }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

    } catch (error) {
      console.error('Error calling API:', error.message);
    }
  
  }
  ApiCaller(studentId);
  };

  return (
    <div>
      <SideBAR>
        <div className='user_h'>
          <h1>Students Management</h1>


<select id="classn" value={selectedValue.classn} onChange={handleDropdownChange}>

        <option value="1st-year">First Year</option>
        <option value="2nd-year">Second Year</option>
        <option value="3rd-year">Third Year</option>
      </select>

<select id="section" value={selectedValue.section} onChange={handleDropdownChange}>

<option value="a">A</option>
<option value="b">B</option>

</select>


          <div className='user_Management'>
            <h2>List of 1st A Students</h2>
            <ul className='users'>
              {students.map((students) => (
                <li key={students.admission_number}>
                  {students.student_full_name}{' '}
                  <button id='del_btn' className='button' onClick={() => handleDeleteStudents(students.admission_number)}>Delete</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SideBAR>
    </div>
  );
};

export default DeleteFirstA;