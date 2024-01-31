// import { useState } from "react";
// import SideBAR from "./SideBAR"
// import { useParams } from 'react-router-dom';
// import CustomBarChart from "./customBarChart";
// import axios from "axios";

// function ExpandBarChart(){

//     const {class1,section} = useParams();
//     const [students,setStudents] = useState({admission_number:1,roll_no:1,student_full_name:'hello',status1:'p'})
//     const [barData,setBarData]= useState([0,0,0,0,0])
//     const ApiCaller = async ()=>{
//         try{
//             const response = await axios.post('http://localhost:80/dashboard-chart-expanded', [class1,section]);
//             setBarData(response.data)

//           }catch (err){
//             console.log(err)
//           }
//           try{
//             const response = await axios.post('http://localhost:80/student-is-listing', [class1,section]);
//             setStudents(response.data)
  

//           }catch (err){
//             console.log(err)
//           }
   
//     }
//     ApiCaller()
//     return(

// <SideBAR>
//   <div className='aabbccdd'>
//     <CustomBarChart data={['First-Year-B',barData[0],barData[1],barData[2],barData[3],barData[4]]}/>
//   </div>
// {students.map((students) => (
//                 <li key={students.admission_number}>

                
//                 <span>{'Admission Number   ::   '}{students.admission_number}{'     '}</span>
//                 <span>{'Roll No   ::   '}{students.roll_no}{'     '}</span>
//                 <span>{'Student Full Name   ::   '}{students.student_full_name}{'     '}</span>
//                 <span>{'Status   ::   '}{students.status1}{'     '}</span>


//                 </li>
//               ))}
// </SideBAR>

//     )
// }
// export default ExpandBarChart

import { useState, useEffect } from "react";
import SideBAR from "./SideBAR";
import { useParams } from 'react-router-dom';
import CustomBarChart from "./customBarChart";
import axios from "axios";
import './dashboard.css'

function ExpandBarChart() {
  const { class1, section } = useParams();
  const [students, setStudents] = useState([{ admission_number: 1, roll_no: 1, student_full_name: 'hello', status1: 'p' }]);
  const [barData, setBarData] = useState([0, 0, 0, 0, 0]);

  const ApiCaller = async () => {
    try {
      const response = await axios.post('http://localhost:80/dashboard-chart-expanded', [class1, section]);
      setBarData(response.data);
    } catch (err) {
      console.log(err);
    }

    try {
      const response = await axios.post('http://localhost:80/student-is-listing', [class1, section]);
      setStudents(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    ApiCaller();
  }, []);

  return (
    <SideBAR>
      <div className='aabbccdd'>
        <CustomBarChart data={[class1+' '+section, barData[0], barData[1], barData[2], barData[3], barData[4]]} />
      </div>
      <div className="aabbccddee">
      <ul>
        <li style={{backgroundColor:'red'}}>
          <span>Roll No</span>
          <span>Student Name</span>
          <span>Today Status</span>
        </li>
        {(() => {
          const studentList = [];
          for (let i = 0; i < students.length; i++) {
            const student = students[i];

            studentList.push(
              <li key={student.admission_number}>
                {/* <span>{'Admission Number   ::   '}{student.admission_number}{'     '}</span> */}
                <span>{student.roll_no}</span>
                <span>{student.student_full_name}</span>
                <span>{student.status1}</span>
              </li>
            );
          }
          return studentList;
        })()}
      </ul>
      </div>
    </SideBAR>
  );
}

export default ExpandBarChart;
