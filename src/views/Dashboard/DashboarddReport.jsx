import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { apiaddress } from "auth/apiaddress";
import { postData } from "auth/datapost";

function DashboarddReport() {
    
const [tstrength,setTStrength] = React.useState({strength:0})
const [tpresent,setPresent] = React.useState({present:0})
const [tabsent,setAbsent] = React.useState({absent:0})
const [tleave,setLeave] = React.useState({leaves:0})
const[lates,setlates] = React.useState({lates:0})
const[data,setData] = React.useState([[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]])
var data1 = data[0]
var data2 = data[1]
var data3 = data[2]
var data4 = data[3]
var data5 = data[4]
var data6 = data[5]
const ApiCaller = async ()=>{
try{
    const response0 = await postData(apiaddress+'/today-ict-strength', {hello:'true'});
    setTStrength(response0)
    

    const response1 = await postData(apiaddress+'/today-ict-present', {hello:'true'});
    setPresent(response1)

    const response2 = await postData(apiaddress+'/today-ict-absent', {hello:'true'});
    setAbsent(response2)

    const response3 = await postData(apiaddress+'/today-ict-leave', {hello:'true'});
    setLeave(response3)

    const response4 = await postData(apiaddress+'/today-ict-lates', {hello:'true'});
    setlates(response4)

    const response5 = await postData(apiaddress+'/dashboard-charts', {hello:'true'});
    setData(response5)


    return
}catch (err){

    console.log(err)

}

}
React.useEffect(() => {
ApiCaller();
}, []);  

const handlePrint = async () => {
document.body.style.visibility = 'hidden'
document.getElementById('abcdefg').style.visibility = 'visible'
window.print();

document.body.style.visibility = 'visible'

};

const colorpick = (color) => {
switch(color){
    case('odd'):
    return {backgroundColor:'white'}
    break;

    case('even'):
    return {backgroundColor:'rgba(233, 30, 99,.4)',border:'none'}
    break;

    case('total'):
    return {backgroundColor:'#00acc1',color:'white',fontWeight:'bold'}
    break;
    case('print'):
    return {backgroundColor:'#00acc1',color:'white',fontWeight:'bold',margin:'0 auto',height:'50px',width:'150px',border:'none',borderRadius:'5px',cursor:'pointer'}
    break;

    default:
    return {backgroundColor:'black'}
    break;
}
}

return (
<>
<div id='abcdefg'>
<Card>
<CardHeader color="primary">
<h4>ICT Department Attendance Summary</h4>
</CardHeader>
<CardBody>

<GridContainer justify="center" alignItems="center" spacing={1}>
<GridItem xs={12} sm={12} md={12}>
<ul className="myul">
<li>
<span className="wd1">Class Name</span>
<span className="wd2">Strength</span>
<span className="wd3">Present</span>
<span className="wd1">Absent</span>
<span className="wd1">Leave</span>
<span className="wd3">Late</span>
</li>

            <li>
            <span style={colorpick('even')} className="wv1">1st-Year-A</span>
            <span style={colorpick('even')} className="wv2">{data1[0]}</span>
            <span style={colorpick('even')} className="wv3">{data1[1]}</span>
            <span style={colorpick('even')} className="wv1">{data1[2]}</span>
            <span style={colorpick('even')} className="wv1">{data1[3]}</span>
            <span style={colorpick('even')} className="wv3">{data1[4]}</span>
            </li>

            <li >
            <span style={colorpick('odd')} className="wv1">1st-Year-B</span>
            <span style={colorpick('odd')} className="wv2">{data2[0]}</span>
            <span style={colorpick('odd')} className="wv3">{data2[1]}</span>
            <span style={colorpick('odd')} className="wv1">{data2[2]}</span>
            <span style={colorpick('odd')} className="wv1">{data2[3]}</span>
            <span style={colorpick('odd')} className="wv3">{data2[4]}</span>
            </li>

            <li>
            <span style={colorpick('even')} className="wv1">2nd-Year-A</span>
            <span style={colorpick('even')} className="wv2">{data3[0]}</span>
            <span style={colorpick('even')} className="wv3">{data3[1]}</span>
            <span style={colorpick('even')} className="wv1">{data3[2]}</span>
            <span style={colorpick('even')} className="wv1">{data3[3]}</span>
            <span style={colorpick('even')} className="wv3">{data3[4]}</span>
            </li>

            <li>
            <span style={colorpick('odd')} className="wv1">2nd-Year-B</span>
            <span style={colorpick('odd')} className="wv2">{data4[0]}</span>
            <span style={colorpick('odd')} className="wv3">{data4[1]}</span>
            <span style={colorpick('odd')} className="wv1">{data4[2]}</span>
            <span style={colorpick('odd')} className="wv1">{data4[3]}</span>
            <span style={colorpick('odd')} className="wv3">{data4[4]}</span>
            </li>

            <li>
            <span style={colorpick('even')} className="wv1">3rd-Year-A</span>
            <span style={colorpick('even')} className="wv2">{data5[0]}</span>
            <span style={colorpick('even')} className="wv3">{data5[1]}</span>
            <span style={colorpick('even')} className="wv1">{data5[2]}</span>
            <span style={colorpick('even')} className="wv1">{data5[3]}</span>
            <span style={colorpick('even')} className="wv3">{data5[4]}</span>
            </li>

            <li>
            <span style={colorpick('odd')} className="wv1">3rd-Year-B</span>
            <span style={colorpick('odd')} className="wv2">{data6[0]}</span>
            <span style={colorpick('odd')} className="wv3">{data6[1]}</span>
            <span style={colorpick('odd')} className="wv1">{data6[2]}</span>
            <span style={colorpick('odd')} className="wv1">{data6[3]}</span>
            <span style={colorpick('odd')} className="wv3">{data6[4]}</span>
            </li>

<li>
<span style={colorpick('total')} className="wv1">Total</span>
<span style={colorpick('total')} className="wv2">{tstrength.strength}</span>
<span style={colorpick('total')} className="wv3">{tpresent.present}</span>
<span style={colorpick('total')} className="wv1">{tabsent.absent}</span>
<span style={colorpick('total')} className="wv1">{tleave.leaves}</span>
<span style={colorpick('total')} className="wv3">{lates.lates}</span>
</li>
</ul>
</GridItem>
</GridContainer>


</CardBody>
</Card>
</div>
<button style={colorpick('print')} onClick={handlePrint}>Print</button>
</>
);
};

export default DashboarddReport
