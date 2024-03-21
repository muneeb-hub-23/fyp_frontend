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
  const [warningletters,setwarningletters] = useState([])


  const ApiCaller3 = async (classn,section,sessiont) => {

  const response = await postData(apiaddress+'/warning-letters',{classn,section,sessiont})
  console.log(response)
  const res5 = await postData(apiaddress+'/get-warning-letters',{classn,section,session:sessiont})
  setwarningletters(res5)

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

    function printDiv(name1) {

      const htmlContent = `
      <body style="margin: 0;">
      <div id="p1" style="overflow: hidden; position: relative; background-color: white; width: 935px; height: 1210px;">
      <style class="shared-css" type="text/css" >
      .t {
        transform-origin: bottom left;
        z-index: 2;
        position: absolute;
        white-space: pre;
        overflow: visible;
        line-height: 1.5;
      }
      .text-container {
        white-space: pre;
      }
      @supports (-webkit-touch-callout: none) {
        .text-container {
          white-space: normal;
        }
      }
      </style>
      <style type="text/css" >
      
      #t1_1{left:99px;bottom:60px;letter-spacing:-0.15px;}
      #t2_1{left:366px;bottom:60px;}
      #t3_1{left:511px;bottom:60px;letter-spacing:0.03px;word-spacing:0.17px;}
      #t4_1{left:768px;bottom:60px;}
      #t5_1{left:154px;bottom:998px;}
      #t6_1{left:66px;bottom:864px;letter-spacing:-0.07px;}
      #t7_1{left:66px;bottom:813px;letter-spacing:0.01px;word-spacing:-1.65px;}
      #t8_1{left:66px;bottom:767px;letter-spacing:-0.27px;word-spacing:-1.09px;}
      #t9_1{left:66px;bottom:747px;letter-spacing:-0.37px;word-spacing:-0.33px;}
      #ta_1{left:66px;bottom:726px;letter-spacing:-0.1px;}
      #tb_1{left:66px;bottom:702px;letter-spacing:-0.24px;}
      #tc_1{left:557px;bottom:1033px;letter-spacing:-0.32px;word-spacing:0.52px;}
      #td_1{left:369px;bottom:1019px;letter-spacing:-0.06px;word-spacing:-0.31px;}
      #te_1{left:355px;bottom:863px;letter-spacing:-0.28px;word-spacing:-0.52px;}
      #tf_1{left:355px;bottom:820px;letter-spacing:-0.12px;}
      #tg_1{left:355px;bottom:737px;letter-spacing:-0.12px;}
      #th_1{left:355px;bottom:698px;letter-spacing:-0.38px;word-spacing:1.43px;}
      #ti_1{left:355px;bottom:675px;letter-spacing:-0.28px;word-spacing:0.76px;}
      #tj_1{left:355px;bottom:652px;letter-spacing:-0.32px;word-spacing:1.18px;}
      #tk_1{left:355px;bottom:629px;letter-spacing:-0.33px;word-spacing:1.36px;}
      #tl_1{left:355px;bottom:580px;letter-spacing:-0.27px;}
      #tm_1{left:355px;bottom:557px;letter-spacing:-0.28px;word-spacing:1.31px;}
      
      .s0{font-size:17px;font-family:FranklinGothic-Medium_1h;color:#000;}
      .s1{font-size:84px;font-family:FranklinGothic-Medium_1h;color:#C5E0B4;}
      .s2{font-size:25px;font-family:FranklinGothic-Medium_1h;color:#000;}
      .s3{font-size:17px;font-family:sub_ArialMT_lsr;color:#1F1F1F;}
      .s4{font-size:39px;font-family:FranklinGothic-Medium_1h;color:#000;}
      .s5{font-size:17px;font-family:SitkaSmall_1k;color:#000;}
      </style>
      <style id="fonts1" type="text/css" >
      
      @font-face {
        font-family: FranklinGothic-Medium_1h;
        src: url("fonts/FranklinGothic-Medium_1h.woff") format("woff");
      }
      
      @font-face {
        font-family: SitkaSmall_1k;
        src: url("fonts/SitkaSmall_1k.woff") format("woff");
      }
      
      @font-face {
        font-family: sub_ArialMT_lsr;
        src: url("fonts/sub_ArialMT_lsr.woff") format("woff");
      }
      
      </style>
      <div class="text-container"><span id="t1_1" class="t s0">INFO@CTTI.EDU.PK </span><span id="t2_1" class="t s0">. </span><span id="t3_1" class="t s0">(051) 9278103 </span><span id="t4_1" class="t s0">. </span>
      <span id="t6_1" class="t s2">CONTACT </span>
      <span id="t7_1" class="t s2">(051) 9278103 </span>
      <span id="t8_1" class="t s3">Main I.J.P. Road, Sector I-12, </span>
      <span id="t9_1" class="t s3">Islamabad, Islamabad Capital </span>
      <span id="ta_1" class="t s3">Territory </span>
      <span id="tb_1" class="t s3">info@ctti.edu.pk. </span>
      <span id="tc_1" class="t s4">CTTI ISLAMABAD </span>
      <span id="td_1" class="t s0">FIRST WARNING LETTER DUE TO MORE THAN USUAL ABSENTEES </span>
      <span id="te_1" class="t s2">${name1} </span>
      <span id="tf_1" class="t s0">21-ICT-17 </span>
      <span id="tg_1" class="t s5">Date </span>
      <span id="th_1" class="t s5">Dear ${name1}, </span>
      <span id="ti_1" class="t s5">This is your First Warning Due to so many absents from </span>
      <span id="tj_1" class="t s5">college and if you continue doing absentees than you will be </span>
      <span id="tk_1" class="t s5">withdrawn from the college </span>
      <span id="tl_1" class="t s5">Sincerely, </span>
      <span id="tm_1" class="t s5">CTTI Islamabad </span></div>
      
      </div>
      </body>
    `;

    var printWindow = window.open('', '_blank');
    printWindow.document.open();
    printWindow.document.write(htmlContent);
    printWindow.document.close();
    printWindow.print();
    printWindow.close();
        

    }



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

{warningletters.map((letter)=>(

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
    <td><p className='datatext'>{letter.name}</p></td>
  </tr>
  <tr>
    <td>
    <p className='inlinep bgcolorblue'>Admission Number</p>
    </td>
    <td>
    <p className='datatext'>{letter.admission_number}</p>
    </td>
  </tr>
  <tr>
    <td>
    <p className='inlinep bgcolorblue'>Roll Number</p>
    </td>
    <td>
    <p className='datatext'>{letter.roll_no}</p>
    </td>
  </tr>
  <tr>
    <td>
    <p className='inlinep bgcolorblue'>Absents Count</p>
    </td>
    <td>
    <p className='datatext'>{letter.absent_count}</p>
    </td>
  </tr>
  <tr>
  <td>
  <p className='inlinep bgcolorblue'>Warning Type</p>
  </td>
  <td>
  <p className='datatext'>{letter.warningtype}</p>
  </td>
  </tr>
  <tr>
    <td>
    <p className='inlinep bgcolorblue'>Warning Status</p>
    </td>
    <td>
    <p className='datatext' style={{color:abc(letter.warning_status)}}>{letter.warning_status}</p>
    </td>
  </tr>
  </tbody>
</table>
<Button onClick={()=>{printDiv(letter.name)}} color="primary">Print & Dispatch</Button>


</div>
</CardHeader>
</Card>
</GridItem>

                     ))}




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
