import React, { useState, useEffect } from 'react';
import SideBAR from '../components/SideBAR';
import axios from 'axios';
import { Navigate,useNavigate } from 'react-router-dom';

const DeleteFirstA = () => {
  const navigate = useNavigate();
  const fulldate = new Date().toISOString().split('T')[0];

  const [students, setStudents] = useState([{
    admissionNumber:'',
    roll_no:'',
    student_full_name:'',
  }]);
  const [selectedValue, setSelectedValue] = useState({
    classn: '1st-year',
    section: 'a',
    date: fulldate,
    status:''
  });
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const ApiCaller = async () => {
      try {
        const response = await axios.post('http://localhost:80/get-students-list', selectedValue);
        setStudents(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    ApiCaller();
  }, [selectedValue]); // Run when selectedValue changes

  const handleDropdownChange = (event) => {
    setSelectedValue({
      ...selectedValue,
      [event.target.id]: event.target.value,
    });
    setIndex(0);
  };

  const ApiCaller2 = async (props) => {
    
    try {
      const response = await axios.post('http://localhost:80/mark-attendance', [selectedValue,students[index],props]);
      // setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePresent = () => {
    setSelectedValue({ ...selectedValue, status: 'p' });
    ApiCaller2('p');
    if (index < students.length - 1) {
      setIndex(index + 1);
    }
    else{
      let conf = confirm("All students attendance Marked, Do You Want to Stay on This Page");
      conf ? (console.log("you choosed to stay on this page")):(navigate('/'))
    }
  };

  const handleAbsent = () => {
    setSelectedValue({ ...selectedValue, status: 'a' });
    ApiCaller2('a');
    if (index < students.length - 1) {
      setIndex(index + 1);
    }    else{
      let conf = confirm("All students attendance Marked, Do You Want to Stay on This Page");
      conf ? (console.log("you choosed to stay on this page")):(navigate('/'))
    }
  };

  const handleLeave = () => {
    setSelectedValue({ ...selectedValue, status: 'l' });
        ApiCaller2('l');
    if (index < students.length - 1) {
      setIndex(index + 1);
    }    else{
      let conf = confirm("All students attendance Marked, Do You Want to Stay on This Page");
      conf ? (console.log("you choosed to stay on this page")):(navigate('/'))
    }
  };

  return (
    <SideBAR>
                 <input type="date" name="date" id="date" value={selectedValue.date} onChange={handleDropdownChange}/>
     <select id="classn" value={selectedValue.classn} onChange={handleDropdownChange}>
    
               <option value="1st-year">First Year</option>
           <option value="2nd-year">Second Year</option>
             <option value="3rd-year">Third Year</option>
            </select>
      <select id="section" value={selectedValue.section} onChange={handleDropdownChange}>
        <option value="a">A</option>
       <option value="b">B</option>
        </select>

           <h2>Mark Attendance</h2>
           <p>Admission Number: {students[index].admission_number}</p>
           <p>Roll Number: {students[index].roll_no}</p>
           <p>Name: {students[index].student_full_name}</p>
           <p>Status: {students[index].present}</p>
           <button style={{height:'60px',width:'150px',backgroundColor:'green'}} onClick={()=>{handlePresent(students[index].admission_number)}}>Present</button>
           <button style={{height:'60px',width:'150px',backgroundColor:'red'}} onClick={()=>{handleAbsent(students[index].admission_number)}}>Absent</button>
           <button style={{height:'60px',width:'150px',backgroundColor:'blue'}} onClick={()=>{handleLeave(students[index].admission_number)}}>Leave</button>
    </SideBAR>
  );
};

export default DeleteFirstA;
