import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { apiaddress } from 'auth/apiaddress';

import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
async function postData(url, data) {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const responseData = await response.json();
    // console.log('Response:', responseData);
    return responseData;
  } catch (error) {
    console.error('Error:', error.message);
  }
}
function getFormattedDate() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
  var yyyy = today.getFullYear();
  return yyyy + '-' + mm + '-' + dd;
}



const Markattendance = () => {

  const [classes,setClasses]=useState([])
  const [sections,setSections] = useState([])
  const user = localStorage.getItem('username')
  const fulldate = new Date().toISOString().split('-')[0];
  const [students, setStudents] = useState([{admission_number:0,roll_no:0,student_full_name:''}]);
  const [selectedValue, setSelectedValue] = useState({classn: '',section: '',date: fulldate,status:''});
  const [index, setIndex] = useState(0);
  const [blockeddates,setblockeddates] = useState([]);

  const ApiCaller = async () => {
  
    try {
      const res1 = await postData(apiaddress+'/get-special-classes',{number:user})
      setClasses(res1)
      const res2 = await postData(apiaddress+'/get-special-sections',{number:user})
      setSections(res2)
      const res3 = await postData(apiaddress+'/get-blocked-dates',{number:user})
      setblockeddates(res3.resdates)
    } catch (error) {
      console.log(error);
    }
  
  };
  const handleDropdownChange = async (event) => {
    setSelectedValue({
      ...selectedValue,
      [event.target.id]: event.target.value,
    });
    setIndex(0);
    await ApiCaller3()
  };
  const ApiCaller2 = async (props) => {
    try {  
 
      postData(apiaddress+'/mark-attendance',{ admission_number:props[0] ,status:props[1] });
      
    } catch (error) {
      console.log(error);
    }

  };

  const ApiCaller3 = async (props) => {
    try {  
      const class1 = document.getElementById('classn').value
      const section = document.getElementById('section').value
      setTimeout(async () => {

        const response2 = await postData(apiaddress+'/get-students-list', {class1:class1,section1:section});
        setStudents(response2)
      }, 200);      
    } catch (error) {
      console.log(error);
    }

  };


  const handleAttendance = async (status, adn) => {
       ApiCaller2([adn,status]);
    if (index < students.length - 1) {
      setIndex(prevIndex => prevIndex + 1);
    }
  };

  useEffect(()=>{
    const tb = async () => {
      await ApiCaller()
      await ApiCaller3()
    }
    tb();
  },[])
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const today = new Date().getDay();
  const dayName = daysOfWeek[today];
  const searchString = getFormattedDate();
  const occurrences = blockeddates.filter(item => item === searchString).length;

  
    if(dayName==='Saturday' | dayName==='Sunday'){

      return(

        <h1>Today is a General Holiday</h1>
        
      )}
    else if(occurrences===1){
      return(

        <h1>Today is a Special Holiday</h1>
      )
    }
    else{
      return (
    
    <GridContainer>
       
    
            <GridItem xs={12} sm={12} md={12}>
    
              <Card chart>
                <CardHeader color="primary">
                <h4>Mark Attendance</h4>
                </CardHeader>
                <CardBody>
                  
                <GridContainer justify="center" alignItems="center" spacing={2}>
    
                <GridItem xs={12} sm={6} md={5}>
    
         <select className='nativesize' id="classn" value={selectedValue.classn} onChange={handleDropdownChange}>
        
         {classes.map((classes)=>(
                        <option value={classes.class}>{classes.class}</option>
                      ))}
    
                </select>
    
                </GridItem>
    
                <GridItem xs={12} sm={12} md={5}>
    
          <select className='nativesize' id="section" value={selectedValue.section} onChange={handleDropdownChange}>
          {sections.map((sections)=>(
                        <option value={sections.section}>{sections.section}</option>
                      ))}
            </select>
    
            </GridItem>
    
            <GridItem xs={12} sm={6} md={5}>
            <p className='nativesize'>Admission Number</p>
            </GridItem>
    
            <GridItem xs={12} sm={6} md={5}>
            <p className='nativesize'>{students[index].admission_number}</p>
                </GridItem>
    
                <GridItem xs={12} sm={6} md={5}>
            <p className='nativesize'>Roll Number</p>
            </GridItem>
    
            <GridItem xs={12} sm={6} md={5}>
            <p className='nativesize'>{students[index].roll_no}</p>
                </GridItem>
    
            
                <GridItem xs={12} sm={6} md={5}>
            <p className='nativesize'>Name</p>
            </GridItem>
    
            <GridItem xs={12} sm={6} md={5}>
            <p className='nativesize'>{students[index].student_full_name}</p>
                </GridItem>
    
                <GridItem xs={12} sm={6} md={5}>
                <button className='nativesize presentbtn' onClick={()=>{handleAttendance('p',students[index].admission_number)}}>Present</button>
            </GridItem>
    
            <GridItem xs={12} sm={6} md={5}>
            <button className='nativesize absentbtn' onClick={()=>{handleAttendance('a',students[index].admission_number)}}>Absent</button>
                </GridItem>
    
                <GridItem xs={12} sm={6} md={5}>
                <button className='nativesize leavebtn' onClick={()=>{handleAttendance('l',students[index].admission_number)}}>Leave</button>
            </GridItem>
    
            <GridItem xs={12} sm={6} md={5}>
            <button className='nativesize latebtn' onClick={()=>{handleAttendance('lt',students[index].admission_number)}}>Late</button>
                </GridItem>
    
          
    
        
         
    
    
        <Link to={'/admin/randomattendance'}>
          <h3 className='hyperh3'>Random Attendance</h3>
          </Link>
    
          </GridContainer>
          </CardBody>
              </Card>
            </GridItem>
    </GridContainer>
    
      );
          }


};

export default Markattendance;



