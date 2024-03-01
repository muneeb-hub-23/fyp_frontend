import React, { useEffect, useState } from 'react';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Button from "components/CustomButtons/Button.js";
import { Link, useParams } from 'react-router-dom/cjs/react-router-dom.min'
import dashboardRoutes from 'routes'
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import Switch from '@material-ui/core/Switch';
import CardFooter from 'components/Card/CardFooter';
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
function Setpermissions() {
const {employee_number,employee_full_name,employee_mobile_number,father_full_name,father_mobile_number,joining_date,email,cnic,password} = useParams()
let thedata = async () => {
    let alpha = {}
    await dashboardRoutes.map((route)=>(
        alpha[route.rtlName] = false
    ))

    return alpha
}
var state = {}
useEffect(()=>{
    const caller = async()=>{
        state = await thedata()
    }
    caller()

},[])
const handleChange = (event) => {
    const element = document.getElementById(event).checked
    const names = event
    state[names] = element
  };


const submitdata = async (props) => {

let permissionsarray = []
dashboardRoutes.map((route) => {

    if (state[route.rtlName] === true) {
        permissionsarray.push(route.rtlName)
    }
    return null; // Map function expects a return value for each element
});

let userdata = {employee_number,employee_full_name,employee_mobile_number,father_full_name,father_mobile_number,joining_date,email,cnic,password}
await postData(apiaddress+'/add-user',{userdata,permissionsarray})
window.location.href = '/admin/adduser';

}





return (
<GridContainer justify="center" alignItems="center" spacing={1}>
<GridItem xs={12} sm={12} md={12}>   
<Card>
<CardHeader color="primary">
    <h3>Set Employee Permissions</h3>
</CardHeader>
<CardBody>
<GridContainer justify="center" alignItems="center" spacing={1}>

      {dashboardRoutes.map((route)=>(
        

        <GridItem xs={12} sm={6} md={4}>
            <Card>

                <CardBody>
                <h5>{route.name}</h5>
                <Switch
                        id={route.rtlName}
                        //checked = {true}
                        onChange={()=>{handleChange(route.rtlName)}}
                        color="primary"
                        name={route.rtlName}
                        inputProps={{ 'aria-label': 'primary checkbox' }}

                />
                </CardBody>
            </Card>
       
        </GridItem>
        
        
        
      ))}

</GridContainer>
</CardBody>
<CardFooter>

<Button onClick = {submitdata} color="primary">Submit Details</Button>

</CardFooter>
</Card>
</GridItem>
</GridContainer>
  )
}

export default Setpermissions
