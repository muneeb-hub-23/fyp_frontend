import React from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { apiaddress } from 'auth/apiaddress';
import axios from 'axios';
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
function Todaydetail() {
    const {classn,section} = useParams()
    const [students, setStudents] = React.useState([{ admission_number: 1, roll_no: 1, student_full_name: 'hello', status1: 'p' }]);
    const [barData, setBarData] = React.useState([0, 0, 0, 0, 0]);
  
    const ApiCaller = async () => {
      try {
        const response = await axios.post(apiaddress+'/dashboard-chart-expanded', [classn, section]);
        setBarData(response.data);

        const response2 = await axios.post(apiaddress+'/student-is-listing', [classn, section]);
        setStudents(response2.data);

      } catch (err) {
        console.log(err);
      }
  
    };
  
    React.useEffect(() => {
      const Priority = async () =>{
        try{
          await ApiCaller();
          console.log(students)
        }catch (err){
          console.log(err)
        }
      }
      Priority()
      
    }, []);
  return (
    <GridContainer>
   

   <GridItem xs={12} sm={12} md={12}>

     <Card chart>
       <CardHeader color="primary">
       <h4>Today Detail</h4>
       </CardHeader>
       <CardBody>
         
<GridContainer justify="center" alignItems="center" spacing={2}>

<ul className='myul'>
        <li className='fullwidth colorwhite' style={{backgroundColor:'red'}}>
        <span className='width30'>Roll No</span>
        <span className='width40'>Student Name</span>
        <span className='width30'>Today Status</span>
        </li>

        {students.map((student) => (
        <li className='fullwidth' key={student.admission_number}>
          <span className='width30'>{student.roll_no}</span>
          <span className='width40'>{student.student_full_name}</span>
          <span className='width30'>{student.status1}</span>
        </li>
              ))}
</ul>

</GridContainer>


 </CardBody>
     </Card>
   </GridItem>
</GridContainer>
  )
}

export default Todaydetail
