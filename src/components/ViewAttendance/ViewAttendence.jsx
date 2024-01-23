import React, { useState } from 'react'
import SideBAR from '../SideBAR'
import "../../index.css";
import { useNavigate } from 'react-router-dom';
import DataBox from './DataBox';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import { data } from 'jquery';

const ViewAttendence = () => {
const [firstyeara,setfirstyeara] = useState([]);
const [firstyearb,setfirstyearb] = useState([]);
const [secondyeara,setsecondyeara] = useState([]);
const [secontyearb,setsecontyearb] = useState([]);
const [thirdyeara,setthirdyeara] = useState([]);
const [thirdyearb,setthirdyearb] = useState([]);
const [dates,setdates]=useState({date1:new Date().toISOString().split('T')[0]})
const navigate = useNavigate();
const ApiCaller = async () => {
  try {
    const response = await axios.post('http://localhost:80/view-attendance', {date1:dates.date1});
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
<DataBox class={'1st-year'} section={'A'} data={[firstyeara[0],firstyeara[1],firstyeara[2],firstyeara[3]]}/>
</div>
<div className='col-lg' style={style}>
<DataBox class={'1st-year'} section={'B'} data={[firstyearb[0],firstyearb[1],firstyearb[2],firstyearb[3]]}/>
</div>
<div className='col-lg' style={style}>
<DataBox class={'2nd-year'} section={'A'} data={[secondyeara[0],secondyeara[1],secondyeara[2],secondyeara[3]]}/>
</div>
</div>
<div className="row">
<div className='col-lg' style={style}>
<DataBox class={'2nd-year'} section={'B'} data={[secontyearb[0],secontyearb[1],secontyearb[2],secontyearb[3]]}/>
</div>
<div className='col-lg' style={style}>
<DataBox class={'3rd-year'} section={'A'} data={[thirdyeara[0],thirdyeara[1],thirdyeara[2],thirdyeara[3]]}/>
</div>
<div className='col-lg' style={style}>
<DataBox class={'3rd-year'} section={'B'} data={[thirdyearb[0],thirdyearb[1],thirdyearb[2],thirdyearb[3]]}/>
</div>
</div>
</div>
      </SideBAR>

  )
}

export default ViewAttendence;


