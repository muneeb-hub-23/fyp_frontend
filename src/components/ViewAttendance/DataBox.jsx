import React from "react";
import './databox.css'
const DataBox = (props)=>{


return(
<div className="databox">
    <h2>Class: {props.class}</h2>
    <h3>Section: {props.section}</h3>
    <h4>Total Strength: {props.total_strength}</h4>
    <h4>Total Present: {props.total_present}</h4>
    <h4>Total Absent: {props.total_absent}</h4>
    <h4>Total Leave: {props.total_leave}</h4>
</div>
)


}
export default DataBox;