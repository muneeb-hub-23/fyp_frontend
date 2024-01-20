import React, { useState } from 'react';
import SideBAR from '../SideBAR';
import "../Users/DeleteUser.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const DeleteFirstA = () => {
const navigate = useNavigate();
  const [students, setData] = useState([]);
  const [selectedValue, setSelectedValue] = useState({classn:'1st-year',section:'a'});

const ApiCaller = async () => {
 
      try {
        const response = await axios.post('http://localhost:80/get-students-list',selectedValue);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
   
}
const buttonClicked = (props)=>{
  console.log(props)
  navigate('/Students/ModifyStu/$'+props.admission_number+'/$'+props.roll_no+'/$'+props.student_full_name+'/$'+props.student_mobile_number+'/$'+props.father_full_name+'/$'+props.father_mobile_number+'/$'+props.joining_date+'/$'+props.email+'/$'+props.cnic+'/$'+props.department+'/$'+props.class+'/$'+props.section+'/$'+props.shift+'/modify')
  
}
const handleDropdownChange = (event) => {
   setSelectedValue({classn:document.getElementById('classn').value,section:document.getElementById('section').value});
};

ApiCaller();

  return (
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
                      

 <button id='del_btn' className='button' onClick={()=>buttonClicked(students)}>Modify</button>

                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </SideBAR>

  );
};

export default DeleteFirstA;