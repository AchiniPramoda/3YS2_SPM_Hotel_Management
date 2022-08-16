import React, { useState } from "react";
import axios from "axios";
import './staff.css';

function Addstaff(){

  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    staffid:"",
    phone: "",
    email: "",
    possition: "",
    address: "",
    dateofbirth: "",
    wortype: "",
    comment: "",
    salary: ""

 });

 const handleStaffData = (e) => {
  const { name, value } = e.target
  setValues({ ...values, [name]: value});
}  

const AddStaff = (e) => {
  e.preventDefault();
  let staffData = {
    firstname: values.firstname,
    lastname: values.lastname,
    staffid: values.staffid,
    phone: values.phone,
    email: values.email,
    possition: values.possition,
    address: values.address,
    wortype: values.wortype,
    dateofbirth: values.dateofbirth,
    comment: values.comment,
    salary: values.salary,
 
  }

  console.log(staffData);
         
axios.post("http://localhost:8345/staff/addstaff", staffData )
    .then((response) => {
      console.log(response.data);
    })
    
    .catch((error) => {
      console.log(error);
    })

  }





    return(
        <div>

<div >
    <section class="Staff-form dark">
        
      <div class="container">
        <form>
         
          {/* use for title */}
            <div class="products">

               <div class="title">Add Staff</div>
          
           </div>
           


          <div class="card-details">

           
            <div class="row">    
             
                {/* For Input fields that wants column  */}
            
              <div class="form-group col-sm-6">
                <label for="card-holder">First Name</label>
     
                  <input 
                     
                     type="text"
                     class="form-control " 
                     placeholder="First Name" 
                     aria-label="First Name" 
                     aria-describedby="basic-addon1" 
                     name="firstname"
                     onChange={handleStaffData}
                     value={values.firstname}
                     />
              </div>

              <div class="form-group col-sm-6">
                <label for="">Last Name</label>
               
                   <input 
                      type="text" 
                      class="form-control" 
                      placeholder="Last Name" 
                      aria-label="Last Name" 
                      aria-describedby="basic-addon1"
                      name="lastname"
                      onChange={handleStaffData}
                      value={values.lastname}
                      />

                      {/* IF someone need a / betwen input fields */}
                          {/* <span class="date-separator">/</span> */}
            
              
              </div>

              <div class="form-group col-sm-6">
                <label for="card-holder">Staff ID</label>
     
                  <input 
                     type="text" 
                     class="form-control" 
                     placeholder="Staff ID" 
                     aria-label="Staff ID" 
                     aria-describedby="basic-addon1"
                     name="staffid"
                     onChange={handleStaffData}
                     value={values.staffid}
                     />
              </div>

              <div class="form-group col-sm-6">
                <label for="">Phone</label>
               
                 
                   <input 
                      type="text" 
                      class="form-control" 
                      placeholder="Phone No" 
                      aria-label="Phone No" 
                      aria-describedby="basic-addon1" 
                      name="phone"
                      onChange={handleStaffData}
                      value={values.phone}
                      />

                </div>
            
              <div class="form-group col-sm-12">
                 <label for="">E-Mail</label>
               
               
                 <input 
                    type="text" 
                    class="form-control" 
                    placeholder="E-mail" 
                    aria-label="E-mail" 
                    aria-describedby="basic-addon1" 
                    name="email"
                    onChange={handleStaffData}
                    value={values.email}
                    />

               </div>


               <div class="form-group col-sm-6">
                <label for="card-holder">Date of Birth</label>
     
                  <input 
                     type="date" 
                     class="form-control" 
                     aria-label="Staff ID" 
                     aria-describedby="basic-addon1"
                     name="dateofbirth"
                     onChange={handleStaffData}
                     value={values.dateofbirth}
                     />
              </div>

              <div class="form-group col-sm-6">
                <label for="">Salary</label>
               
                 
                   <input 
                      type="text" 
                      class="form-control" 
                      placeholder="Salary"
                      aria-label="Salary" 
                      aria-describedby="basic-addon1" 
                      name="salary"
                      onChange={handleStaffData}
                      value={values.salary}
                      />

                </div>

                
              <div class="form-group col-sm-12">
                 <label for="">Address</label>
               
               
                 <input 
                    type="text" 
                    class="form-control" 
                    placeholder="Address" 
                    aria-label="Address" 
                    aria-describedby="basic-addon1"
                    name="address"
                    onChange={handleStaffData}
                    value={values.address}
                    />

               </div>

               
              <div class="form-group col-sm-12">
                 <label for="">Apply Position</label>
               
               
                 <input 
                    type="text" 
                    class="form-control" 
                    placeholder="Apply Position" 
                    aria-label="Apply Position" 
                    aria-describedby="basic-addon1"
                    name="possition"
                    onChange={handleStaffData}
                    value={values.possition}
                    />

               </div>

               
              <div class="form-group col-sm-12">
                 <label for="">Work Type</label>
               
               
                 <input 
                    type="text" 
                    class="form-control" 
                    placeholder="Work Type" 
                    aria-label="Work Type" 
                    aria-describedby="basic-addon1"
                    name="wortype"
                    onChange={handleStaffData}
                    value={values.wortype}
                    />

               </div>

               <div class="form-group col-sm-12">
                 <label for="">Comment</label>
               
               
                 <input 
                    type="text" 
                    class="form-control" 
                    placeholder="Comment" 
                    aria-label="Comment" 
                    aria-describedby="basic-addon1"
                    name="comment"
                    onChange={handleStaffData}
                    value={values.comment}
                    />

               </div>
              
               <div class="btngroup col-sm-3">
                <button type="button" class="cancel">Clear</button>
              </div>

             
              <div class="btngroup col-sm-3">
                <button type="button" class="submit" onClick={AddStaff}>Submit</button>
              </div>

            </div>
          </div>
        </form>
      </div>
    </section>
  </div>


        </div>
    )
}

export default Addstaff;