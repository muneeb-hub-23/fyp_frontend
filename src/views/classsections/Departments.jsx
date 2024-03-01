import React, { useState, useEffect, useRef} from 'react';
import axios from 'axios';
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { apiaddress } from 'auth/apiaddress';



const Departments = () => {
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
const [departments,setDepartments]=useState([])
const ApiCaller2 = async (props) => {

  try {
    const res1 = await postData(apiaddress+'/get-departments',{data:true})
    setDepartments(res1)
  } catch (error) {
    console.log(error);
  }

};
useEffect(()=>{ 
  ApiCaller2()
},[])
const addthisdepartment = async () => {

    let newdepartment = document.getElementById('newdepartment').value
    if(newdepartment.length === 0){
      alert('please fill the input box')
    }else{
      
      await postData(apiaddress+'/add-new-department',{newdepartment})
      await ApiCaller2()
      document.getElementById('newdepartment').value = ''
    }
}
const deletethisdepartment = async (deletedepartment) => {

  await postData(apiaddress+'/delete-that-department',{deletedepartment})
  await ApiCaller2()

}

  return (
    <Card>
            <CardHeader color="primary">
              <h4>Add Or Delete Departments</h4>
            </CardHeader>
            <CardBody>
<GridContainer justify="center" alignItems="center" spacing={1}>

   <GridItem xs={12} sm={12} md={12}>

    <ul className='myul'>
    <li>
                
                <input id='newdepartment' style={{backgroundColor:'greenyellow'}} className='wf4' placeholder='Add New Department' required/>
              <p className='wf3' onClick={()=>{addthisdepartment()}}>Add This Department</p>
              
              </li>

              <li>
                
                <p style={{backgroundColor:'greenyellow'}} className='wf1'>Department</p>
              <p style={{backgroundColor:'greenyellow'}} className='wf1'>Delete This Department</p>
              </li>
            
              {departments.map((departments)=>(<li>
                
                <p className='wf1'>{departments.department}</p>
                <p className='wf2' onClick={()=>{deletethisdepartment(departments.department)}}>Delete This Department</p>
           
                
                </li>))}
              
</ul>

</GridItem>

    </GridContainer>
    </CardBody>
    </Card>

  );

};

export default Departments;