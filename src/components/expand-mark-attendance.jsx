import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ExpandMarkAttendance = ()=> {

  const ApiCaller2 = async (props) => {

        await fetch('http://localhost:80/mark-attendance', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify([props[1], props[0]]),
        })
  };
  const [test,settest] = useState(0);
  const [selectedValue, setSelectedValue] = useState({
    classn: '1st-year',
    section: 'a',
    status:''
  });
  const handlebtn = async (status, adn) => {
    try{
   ApiCaller2([status, adn]);
   settest(test+1);
   return    
    } catch (err){
      console.log(err)
    }

  };
  let s1 = {fontSize:'1.5rem',margin:'5px',backgroundColor:'rgb(140, 233, 0)',padding:'3px',width:'80px',':hover':{backgroundColor:'white'}}
  let s2 = {fontSize:'1.5rem',margin:'5px',backgroundColor:'red',padding:'3px',width:'80px'}
  let s3 = {fontSize:'1.5rem',margin:'5px',backgroundColor:'rgb(4, 166, 253)',padding:'3px',width:'80px'}
  let s4 = {fontSize:'1.5rem',margin:'5px',backgroundColor:'rgba(253, 170, 4, 0.652)',padding:'3px',width:'80px'}


  const [students1, setStudents1] = useState([{
    admission_number: 1,
    roll_no: 0,
    student_full_name:'',
    status1: ''
  }]);

  useEffect(() => {
    const xbac = async ()=>{
    try {
      const response1 = await axios.post('http://localhost:80/student-is-listing', [selectedValue.classn, selectedValue.section]);
      setStudents1(response1.data);
    } catch (error) {
      console.log(error);
    }
  }
  xbac();
  }, [test]);



    return(
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
            <button style={s1} onClick={() => {handlebtn('p',student.admission_number) }}>Present</button>
            <button style={s2} onClick={() => {handlebtn('a',student.admission_number) }}>Absent</button>
            <button style={s3} onClick={() => {handlebtn('l',student.admission_number) }}>Leave</button>
            <button style={s4} onClick={() => {handlebtn('lt',student.admission_number) }}>Late</button>
          </div>
        </div>
      </li>
    ))}
        </ul>
      </div>
    )
}
export default ExpandMarkAttendance;