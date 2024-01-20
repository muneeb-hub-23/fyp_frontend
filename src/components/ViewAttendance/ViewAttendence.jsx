import React, { useState } from 'react'
import SideBAR from '../SideBAR'
import "../../index.css";
import { useNavigate } from 'react-router-dom';
import DataBox from './DataBox';
import axios from 'axios';

const ViewAttendence = () => {
const [firstyeara,setfirstyeara] = useState({});
const [firstyearb,setfirstyearb] = useState({});
const [secondyeara,setsecondyeara] = useState({});
const [secontyearb,setsecontyearb] = useState({});
const [thirdyeara,setthirdyeara] = useState({});
const [thirdyearb,setthirdyearb] = useState({});
const [dates,setdates]=useState({date1:new Date().toISOString().split('T')[0]})
const navigate = useNavigate();
const ApiCaller = async () => {
  try {
    const response = await axios.post('http://localhost:80/view-attendance', {date1:dates.date1,class:'1st-year',section:'a'});
    setfirstyeara(response.data[0]);
    setfirstyearb(response.data[1]);
    setsecondyeara(response.data[2]);
    setsecontyearb(response.data[3]);
    setthirdyeara(response.data[4]);
    setthirdyearb(response.data[5]);
  } catch (error) {
    console.log(error);
  }
} 

 
ApiCaller()

const handleDropdownChange = (event) => {
  setdates({
    date1:document.getElementById('date1').value
  });

};



  return (

      <SideBAR>
         <input type="date" name="date" id="date1" value={dates.date1} onChange={handleDropdownChange}/>
        <h1>ViewAttendence</h1>
        <DataBox total_strength={firstyeara.total_strength} total_present={firstyeara.total_present} total_absent={firstyeara.total_absent} total_leave={firstyeara.total_leave} class={'1st-year'} section={'A'} s/>
        <DataBox total_strength={firstyearb.total_strength} total_present={firstyearb.total_present} total_absent={firstyearb.total_absent} total_leave={firstyearb.total_leave} class={'1st-year'} section={'B'} s/>
        <DataBox total_strength={secondyeara.total_strength} total_present={secondyeara.total_present} total_absent={secondyeara.total_absent} total_leave={secondyeara.total_leave} class={'2nd-year'} section={'A'} s/>
        <DataBox total_strength={secontyearb.total_strength} total_present={secontyearb.total_present} total_absent={secontyearb.total_absent} total_leave={secontyearb.total_leave} class={'2nd-year'} section={'B'} s/>
        <DataBox total_strength={thirdyeara.total_strength} total_present={thirdyeara.total_present} total_absent={thirdyeara.total_absent} total_leave={thirdyeara.total_leave} class={'3rd-year'} section={'A'} s/>
        <DataBox total_strength={thirdyearb.total_strength} total_present={thirdyearb.total_present} total_absent={thirdyearb.total_absent} total_leave={thirdyearb.total_leave} class={'3rd-year'} section={'B'} s/>

      </SideBAR>

  )
}

export default ViewAttendence;


