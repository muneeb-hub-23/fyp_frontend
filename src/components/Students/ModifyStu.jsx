import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import SideBAR from '../SideBAR'
import "./AddStudent.css";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const ModifyStu  = (props) => {
  const navigate = useNavigate();
  const {admission_number,roll_no,student_full_name,student_mobile_number,father_full_name,father_mobile_number,joining_date,email,cnic,department,class1,section,shift} = useParams();

  const [formData, setFormData] = useState({
    admission_number: admission_number.substr(1),
    roll_no: roll_no.substr(1),
    student_full_name: student_full_name.substr(1),
    joining_date: joining_date.substr(1),
    email: email.substr(1),
    cnic: cnic.substr(1),
    department: department.substr(1),
    class: class1.substr(1),
    section: section.substr(1),
    shift: shift.substr(1),
    student_mobile_number: student_mobile_number.substr(1),
    father_full_name: father_full_name.substr(1),
    father_mobile_number: father_mobile_number.substr(1),
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handlePostData = (e) => {
    e.preventDefault();
    let aba = confirm("are you sure you wan't to modify")
    const ApiCaller = async (props) => {

      try {
        const response = await axios.post('http://localhost:80/update-student',props);
        console.log(response);
      } catch (error) {
        console.log(error);
      }

  };
  aba ? ApiCaller(formData) : navigate('/Students/modify-Student');


  const ApiCallerr = async (props) => {
  try {
    const response = await axios.post('http://localhost:80/get-student-info',{value:props});
    console.log(response);
  } catch (error) {
    console.log(error);
  }
  }
  aba ? ApiCallerr(formData) : navigate('/Students/modify-Student')
let abc = confirm("Do you want more modification")
  abc ? console.log("you choosed to stay") : navigate('/Students/modify-Student')

  };


  return (
    <div>
      <SideBAR>
        <div className="main_container">
          <div className="container mt-5 form-group">
            <h1 className="H">Student Registration Form</h1>
            <form className='form_container' onSubmit={handlePostData}>

              <div className="mb-3">

                <label htmlFor="admission_number" className="form-label">
                  Admission Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  disabled='true'
                  id="admission_number"
                  name="admission_number"
                  value={formData.admission_number}
                  onChange={handleInputChange}
                />

              </div>

              <div className="mb-3">
                <label htmlFor="rollNo" className="form-label">
                  Roll No
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="roll_no"
                  name="roll_no"
                  value={formData.roll_no}
                  onChange={handleInputChange}
                />

              </div>


              <div className="mb-3">
                <label htmlFor="student_full_name" className="form-label">
                  Student Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="student_full_name"
                  name="student_full_name"
                  value={formData.student_full_name}
                  onChange={handleInputChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="student_mobile_number" className="form-label">
                  Student Mobile Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="student_mobile_number"
                  name="student_mobile_number"
                  value={formData.student_mobile_number}
                  onChange={handleInputChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="father_full_name" className="form-label">
                  Father/Guardian Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="father_full_name"
                  name="father_full_name"
                  value={formData.father_full_name}
                  onChange={handleInputChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="father_mobile_number" className="form-label">
                  Father/Guardian Mobile Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="father_mobile_number"
                  name="father_mobile_number"
                  value={formData.father_mobile_number}
                  onChange={handleInputChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="joining_date" className="form-label">
                  joining_date
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="joining_date"
                  name="joining_date"
                  value={formData.joining_date}
                  onChange={handleInputChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="cnic" className="form-label">
                  CNIC
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="cnic"
                  name="cnic"
                  value={formData.cnic}
                  onChange={handleInputChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="department" className="form-label">
                  Department
                </label>
                <select
                  className="form-select"
                  id="department"
                  name="department"
                  value={formData.department}
                  onChange={handleInputChange}
                >
                  <option value="" disabled>

                  </option>
                  <option value="ict">ICT</option>
                  <option value="mechanical">mechanical</option>
                  <option value="auto&diesel">Auto & Diesel</option>
                  <option value="civil">Civil</option>
                  <option value="qs">QS</option>
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="class" className="form-label">
                  Class
                </label>
                <select
                  className="form-select"
                  id="class"
                  name="class"
                  value={formData.class}
                  onChange={handleInputChange}
                >
                  <option value="" disabled>
  
                  </option>
                  <option value="1st-year">1st-Year</option>
                  <option value="2nd-year">2nd-Year</option>
                  <option value="3rd-year">3rd-Year</option>
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="section" className="form-label">

                </label>
                <select
                  className="form-select"
                  id="section"
                  name="section"
                  value={formData.section}
                  onChange={handleInputChange}
                >
                  <option value="" disabled>
                    Section
                  </option>
                  <option value="a">A</option>
                  <option value="b">B</option>

                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="shift" className="form-label">
                  Shift
                </label>
                <select
                  className="form-select"
                  id="shift"
                  name="shift"
                  value={formData.shift}
                  onChange={handleInputChange}
                >
                  <option value="" disabled>
             
                  </option>
                  <option value="morning">Morning</option>
                  <option value="evening">Evening</option>
                </select>
              </div>

              <button id='btn' type='submit' className="btn btn-primary">
                Update
              </button>
            </form>
          </div>
        </div>
      </SideBAR>

    </div>
  );
};

export default ModifyStu;
