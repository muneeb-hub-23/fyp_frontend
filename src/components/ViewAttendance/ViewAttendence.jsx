import React, { useState } from 'react'
import SideBAR from '../SideBAR'
import "../../index.css";
import { useNavigate } from 'react-router-dom';
import DataBox from './DataBox';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'

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

const style = {margin:'20px',padding:'5px',border:'1px solid black'}

  return (

      <SideBAR>
         <input type="date" name="date" id="date1" value={dates.date1} onChange={handleDropdownChange}/>
        <h1 style={{textAlign:'center'}}>ViewAttendence</h1>
<div className="container">
  <div className="row">
<div className='col-lg' style={style}>
<DataBox class={'1st-year'} section={'A'} data={[firstyeara.total_strength,firstyeara.total_present,firstyeara.total_absent,firstyeara.total_leave]}/>
</div>
<div className='col-lg' style={style}>
<DataBox class={'1st-year'} section={'B'} data={[firstyearb.total_strength,firstyearb.total_present,firstyearb.total_absent,firstyearb.total_leave]}/>
</div>
<div className='col-lg' style={style}>
<DataBox class={'2nd-year'} section={'A'} data={[secondyeara.total_strength,secondyeara.total_present,secondyeara.total_absent,secondyeara.total_leave]}/>
</div>
</div>
<div className="row">
<div className='col-lg' style={style}>
<DataBox class={'2nd-year'} section={'B'} data={[secontyearb.total_strength,secontyearb.total_present,secontyearb.total_absent,secontyearb.total_leave]}/>
</div>
<div className='col-lg' style={style}>
<DataBox class={'3rd-year'} section={'A'} data={[thirdyeara.total_strength,thirdyeara.total_present,thirdyeara.total_absent,thirdyeara.total_leave]}/>
</div>
<div className='col-lg' style={style}>
<DataBox class={'3rd-year'} section={'B'} data={[thirdyearb.total_strength,thirdyearb.total_present,thirdyearb.total_absent,thirdyearb.total_leave]}/>
</div>
</div>
</div>
      </SideBAR>

  )
}

export default ViewAttendence;


