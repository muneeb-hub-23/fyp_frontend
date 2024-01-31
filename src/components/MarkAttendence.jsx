import React, { useState, useEffect } from 'react';
import SideBAR from '../components/SideBAR';
import axios from 'axios';
import { Navigate,useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import { Link } from 'react-router-dom';

const DeleteFirstA = () => {
  const [tommy,settommy] = useState('x');
  const navigate = useNavigate();
  const fulldate = new Date().toISOString().split('-')[0];

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
  const [students1, setStudents1] = useState([{
    admission_number: 1,
    roll_no: 0,
    student_full_name:'',
    status1: ''
  }]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = await axios.post('http://localhost:80/student-is-listing', [selectedValue.classn, selectedValue.section]);
        setStudents1(response1.data);
  
        const response2 = await axios.post('http://localhost:80/get-students-list', selectedValue);
        setStudents(response2.data);
      } catch (error) {
        console.log(error);
      }
    };
  
    fetchData();
  }, [selectedValue, tommy,index]);
  const handleDropdownChange = (event) => {
    setSelectedValue({
      ...selectedValue,
      [event.target.id]: event.target.value,
    });
    setIndex(0);
  };

  const ApiCaller2 = async (props) => {
    
    
    try {
      

      
      const response = await axios.post('http://localhost:80/mark-attendance', [props[1],props[0]]);
      response ? (console.log('btn clicked')):(console.log('btn clicked'))
  
    } catch (error) {
      console.log(error);
    }

  };



  const handleAttendance = (status, props) => {
    setSelectedValue({ ...selectedValue, status });
    ApiCaller2([status, props]);
    if (index < students.length - 1) {
      setIndex(prevIndex => prevIndex + 1);
    } else {
      let conf = window.confirm("All students' attendance marked. Do you want to stay on this page?");
      conf ? (console.log("You chose to stay on this page")) : (navigate('/'));
    }
  };





  const handlebtn = (status, props) => {
    ApiCaller2([status, props]);
    settommy(status);
  };


let s1 = {fontSize:'1.5rem',margin:'5px',backgroundColor:'rgb(140, 233, 0)',padding:'3px',width:'80px',':hover':{backgroundColor:'white'}}
let s2 = {fontSize:'1.5rem',margin:'5px',backgroundColor:'red',padding:'3px',width:'80px'}
let s3 = {fontSize:'1.5rem',margin:'5px',backgroundColor:'rgb(4, 166, 253)',padding:'3px',width:'80px'}
let s4 = {fontSize:'1.5rem',margin:'5px',backgroundColor:'rgba(253, 170, 4, 0.652)',padding:'3px',width:'80px'}
  return (
    <SideBAR>
<div className="container" style={{margin:'30px'}}>
                 {/* <input type="date" name="date" id="date" value={selectedValue.date} onChange={handleDropdownChange}/> */}
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
           {/* <p>Status: {students[index].present}</p> */}
           <button style={{height:'60px',width:'20%',margin:'5px',backgroundColor:'rgb(140, 233, 0)'}} onClick={()=>{handleAttendance('p',students[index].admission_number)}}>Present</button>
           <button style={{height:'60px',width:'20%',margin:'5px',backgroundColor:'red'}} onClick={()=>{handleAttendance('a',students[index].admission_number)}}>Absent</button>
           <button style={{height:'60px',width:'20%',margin:'5px',backgroundColor:'rgb(4, 166, 253)'}} onClick={()=>{handleAttendance('l',students[index].admission_number)}}>Leave</button>
           <button style={{height:'60px',width:'20%',margin:'5px',backgroundColor:'rgba(253, 170, 4, 0.652)'}} onClick={()=>{handleAttendance('lt',students[index].admission_number)}}>Late</button>
           </div>

  <div className="aabbccddee">
    <ul>
        <li style={{backgroundColor:'red'}}>
          <span>Roll No</span>
          <span>Student Name</span>
          <span>Today Status</span>
        </li>
        {students1.map((student) => (
  <li key={student.admission_number}>
    <div className="row">
      <div className="col-lg">
        <span>{student.roll_no}</span>
        <span className='xxx'>{student.student_full_name}</span>
        <span>{student.status1}</span>
      </div>
      <div className="col-lg">
        <button style={s1} onMouseEnter={(e) => { e.target.style.backgroundColor = 'white' }} onMouseLeave={(e) => { e.target.style.backgroundColor = 'rgb(140, 233, 0)' }} onClick={() => {handlebtn('p',student.admission_number) }}>Present</button>
        <button style={s2} onMouseEnter={(e) => { e.target.style.backgroundColor = 'white' }} onMouseLeave={(e) => { e.target.style.backgroundColor = 'red' }} onClick={() => {handlebtn('a',student.admission_number) }}>Absent</button>
        <button style={s3} onMouseEnter={(e) => { e.target.style.backgroundColor = 'white' }} onMouseLeave={(e) => { e.target.style.backgroundColor = 'rgb(4, 166, 253)' }} onClick={() => {handlebtn('l',student.admission_number) }}>Leave</button>
        <button style={s4} onMouseEnter={(e) => { e.target.style.backgroundColor = 'white' }} onMouseLeave={(e) => { e.target.style.backgroundColor = 'rgba(253, 170, 4, 0.652)' }} onClick={() => {handlebtn('lt',student.admission_number) }}>Late</button>
      </div>
    </div>
  </li>
))}
    </ul>
  </div>
    <Link to={'/ExpandMarkAttendance'}>Testing</Link>
    </SideBAR>
  );
};

export default DeleteFirstA;



