import React, { useEffect, useState } from 'react';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import CancelIcon from '@material-ui/icons/Cancel';
import { apiaddress } from 'auth/apiaddress';
const styles = {
    cardCategoryWhite: {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    cardTitleWhite: {
      color: "#FFFFFF",
      marginTop: "0px",
      minHeight: "auto",
      fontWeight: "300",
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      marginBottom: "3px",
      textDecoration: "none"
    }
  };
const useStyles = makeStyles(styles);
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

function Assignclasses() {
const classes = useStyles()
const [classes1,setClasses]=useState([])
const [sections,setSections] = useState([])
const [employees,setEmployees] = useState([])
const [selectedValue, setSelectedValue] = useState({classn:'1st-year',section:'a',employee_number:0});
const [assignedclasses,setassignedclasses] = useState([])
const handleDropdownChange = async (event) => {
    try{
    setSelectedValue({
      classn:document.getElementById('classn').value,
      section:document.getElementById('section').value,
      employee_number:document.getElementById('employee').value
    });
    return
}catch(err){
    console.log(err)
    return
}
};
const ApiCaller = async (props) => {

  try {
    const res1 = await postData(apiaddress+'/get-classes',{data:true})
    setClasses(res1)
    const res2 = await postData(apiaddress+'/get-sections',{data:true})
    setSections(res2)
    const response = await postData(apiaddress+'/get-users-list',{});
    setEmployees(response);
    setSelectedValue({...selectedValue,employee_number:response[0].employee_number})
    const response2 = await postData(apiaddress+'/get-assigned-classes',{});
    await setassignedclasses(response2);
  } catch (error) {
    console.log(error);
  }

};
const handleShow = async () => {
    postData(apiaddress+'/assign-classes',{selectedValue})
    ApiCaller()
}
const handleDelete = async (data) => {
    postData(apiaddress+'/delete-class-permission',{data})
    ApiCaller()
}
useEffect(()=>{
  ApiCaller()
},[])

  return (
<GridContainer>
<GridItem xs={12} sm={12} md={12}>
<Card>
<CardHeader color="primary">
    <h4 className={classes.cardTitleWhite}>Assign Classes</h4>
</CardHeader>
<CardBody>
<GridContainer justify="center" alignItems="center" spacing={1}>

                <GridItem  xs={12} sm={6} md={3}>
                <select className='myselectdropdown' id="employee" value={selectedValue.employee_number} onChange={handleDropdownChange}>
                {employees.map((employee)=>(<option value={employee.employee_number}>{employee.employee_number}</option>))}
                </select>
                </GridItem>
            
                <GridItem xs={12} sm={6} md={3}>
                <select className='myselectdropdown' id="classn" value={selectedValue.classn} onChange={handleDropdownChange}>
                {classes1.map((classes)=>(<option value={classes.classes}>{classes.classes}</option>))}
                </select>
                </GridItem>

                <GridItem xs={12} sm={6} md={3}>
                <select className='myselectdropdown' id="section" value={selectedValue.section} onChange={handleDropdownChange}>
                {sections.map((sections)=>(<option value={sections.sections}>{sections.sections}</option>))}
                </select>
                </GridItem>

                <GridItem xs={12} sm={6} md={3}>
                <button onClick={handleShow} style={{backgroundColor:'green',color:'white',cursor:'pointer'}} className='myselectdropdown'>SET</button>
                </GridItem>


</GridContainer>

<GridContainer justify="center" alignItems="center" spacing={1}>

            <GridItem  xs={12} sm={12} md={12}>
                        <ul className='myul'>
                        <li>
                        <span className='wd2'>Employee Number</span>
                        <span className='wd2'>Employee Full Name</span>
                        <span className='wd3'>Class</span>
                        <span className='wd3'>Section</span>
                        <span className='wd3'>Delete</span>

                        </li>

                        {assignedclasses.map((co) => (
                        <li key={co.idclasspermissions}>

                            <span className='wx2'>{co.employee_number}</span>
                            <span className='wx2'>{co.employee_full_name}</span>
                            <span className='wx3'>{co.class}</span>
                            <span className='wx3'>{co.section}</span>
                            <span onClick={()=>{handleDelete(co.idclasspermissions)}} className='wx3 hoverit'>Delete</span>

                        
                        </li>
                        ))}
                        </ul>
            </GridItem>

</GridContainer>


</CardBody>
</Card>
</GridItem>
</GridContainer>
  )
}

export default Assignclasses