import { useState } from "react";
import SideBAR from "./SideBAR"
import { useParams } from 'react-router-dom';
import CustomBarChart from "./customBarChart";
import axios from "axios";

function ExpandBarChart(){

    const {class1,section} = useParams();
    const [students,setStudents] = useState({admission_number:1,roll_no:1,student_full_name:'hello',status1:'p'})
    const [barData,setBarData]= useState([0,0,0,0,0])
    const ApiCaller = async ()=>{
        try{
            const response = await axios.post('http://localhost:80/dashboard-chart-expanded', [class1,section]);
            setBarData(response.data)

          }catch (err){
            console.log(err)
          }
          try{
            const response = await axios.post('http://localhost:80/student-is-listing', [class1,section]);
            setStudents(response.data)
  

          }catch (err){
            console.log(err)
          }
   
    }
    ApiCaller()
    return(

        <SideBAR>
<div className='aabbccdd'>
<CustomBarChart data={['First-Year-B',barData[0],barData[1],barData[2],barData[3],barData[4]]}/>
</div>
{students.map((students) => (
                <li key={students.admission_number}>

                
                <span>{'Admission Number   ::   '}{students.admission_number}{'     '}</span>
                <span>{'Roll No   ::   '}{students.roll_no}{'     '}</span>
                <span>{'Student Full Name   ::   '}{students.student_full_name}{'     '}</span>
                <span>{'Status   ::   '}{students.status1}{'     '}</span>


                </li>
              ))}
        </SideBAR>

    )
}
export default ExpandBarChart