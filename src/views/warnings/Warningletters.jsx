import React, { useEffect, useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
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
import { postData } from 'auth/datapost';
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

const abc = (i) => {
  var delta = '';
  switch (i) {
    case 'pending':
      delta = 'red';
      break; 
    case 'dispatched':
      delta = 'green';
      break; 
    default:
      delta = 'black';
      break; 
  }
  return delta;
}
function Warningletters() {
  const [classes, setClasses] = useState([]);
  const [sections, setSections] = useState([]);
  const user = localStorage.getItem("username");
  const [session,setsession] = useState([]);


  const ApiCaller3 = async (classn,section,sessiont) => {

  const response = await postData(apiaddress+'/warning-letters',{classn,section,sessiont})
  console.log(response)

  }
  const ApiCaller2 = async (props) => {
    try {
      const res1 = await postData(apiaddress + "/get-special-classes", {
        number: user,
      });
      setClasses(res1);
      const res2 = await postData(apiaddress + "/get-special-sections", {
        number: user,
      });
      setSections(res2);
      const res3 = await postData(apiaddress + "/get-sessions", {
        number: user,
      });
      setsession(res3);
      await ApiCaller3(res1[0].class,res2[0].section,res3[0].session)

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const hello = async () => {
      await ApiCaller2();
    }
    hello();

  }, []);
  const handleDropdownChange = async () => {

      const tclass = document.getElementById("classn").value
      const tsection = document.getElementById("section").value
      const tsession = document.getElementById("session").value
      ApiCaller3(tclass,tsection,tsession)

  };

  return (
    <>
    <div className='a11'>
<GridContainer justify="center" alignItems="center">

<GridItem xs={12} sm={3} md={3}> 
<p className='viewdepname'>ICT DEPARTMENT</p>
</GridItem>

<GridItem xs={12} sm={3} md={3}>
<select className='viewdepname' id="session" onChange={handleDropdownChange}>
        
        {session.map((session)=>(
                       <option value={session.session}>{session.session}</option>
                     ))}
   
               </select>
</GridItem>

<GridItem xs={12} sm={3} md={3}>
<select className='viewdepname' id="classn" onChange={handleDropdownChange}>
        
        {classes.map((classes)=>(
                       <option value={classes.class}>{classes.class}</option>
                     ))}
   
               </select>
</GridItem>

<GridItem xs={12} sm={3} md={3}>
<select className='viewdepname' id="section" onChange={handleDropdownChange}>
          {sections.map((sections)=>(
                        <option value={sections.section}>{sections.section}</option>
                      ))}
            </select>
</GridItem>

</GridContainer>
</div>
<GridContainer justify="center" alignItems="center" spacing={1}>
<GridItem xs={12} sm={12} md={12}>   
<Card>
<CardBody>

<GridContainer justify="center" alignItems="center" spacing={1}>


<GridItem xs={12} sm={6} md={4}>
<Card>
<CardHeader>
<div className="dummydiv">
<table>
  <tbody>
  <tr>
    <td>
    <p className='inlinep bgcolorblue'>Name</p>
    </td>
    <td><p className='datatext'>Faizan Ahmad</p></td>
  </tr>
  <tr>
    <td>
    <p className='inlinep bgcolorblue'>Admission Number</p>
    </td>
    <td>
    <p className='datatext'>3453</p>
    </td>
  </tr>
  <tr>
    <td>
    <p className='inlinep bgcolorblue'>Roll Number</p>
    </td>
    <td>
    <p className='datatext'>21-ict-23</p>
    </td>
  </tr>
  <tr>
    <td>
    <p className='inlinep bgcolorblue'>Absents Count</p>
    </td>
    <td>
    <p className='datatext'>20</p>
    </td>
  </tr>
  <tr>
  <td>
  <p className='inlinep bgcolorblue'>Warning Type</p>
  </td>
  <td>
  <p className='datatext'>Second</p>
  </td>
  </tr>
  <tr>
    <td>
    <p className='inlinep bgcolorblue'>Warning Status</p>
    </td>
    <td>
    <p className='datatext' style={{color:abc('pending')}}>Pending</p>
    </td>
  </tr>
  </tbody>
</table>
<Button color="primary">Print & Dispatch</Button>


</div>
</CardHeader>
</Card>
</GridItem>


</GridContainer>

</CardBody>
</Card>
</GridItem>
</GridContainer>
</>
  )
}

export default Warningletters

// import React from 'react'
// import { useState, useEffect } from 'react';
// function Warningletters() {
//   const [ipAddress, setIPAddress] = useState('');

//   useEffect(() => {
//     const getIPAddress = async () => {
//       try {
//         const response = await fetch('https://api.ipify.org?format=json');
//         const data = await response.json();
//         setIPAddress(data.ip);
//       } catch (error) {
//         console.error('Error retrieving IP address:', error);
//       }
//     };

//     getIPAddress();
//   }, []);

//   return (
//     <div>
//       <h2>Client IP Address:</h2>
//       <p>{ipAddress}</p>
//     </div>
//   );
// }

// export default Warningletters
