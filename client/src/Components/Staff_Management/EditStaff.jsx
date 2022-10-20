import React, { useEffect, useState } from "react";
import axios from "axios";
import "./staff.css";
import {  useParams } from "react-router-dom";
import Navbar from "../Navbar/AdminNavbar/AdminNavbar";
import Footer from "../Footer/Footer";

function EditStaff() {

    const [firstname, setfirstname] = useState('');
    const [lastname, setlastname] = useState('');
    const [staffId, setstaffid] = useState('');
    const [phone, setphone] = useState('');
    const [staffemail, setemail] = useState('');
    const [possition, setpossition] = useState('');
    const [address, setaddress] = useState('');
    const [dateofbirth, setdateofbirth] = useState('');
    const [wortype, setwortype] = useState('');
    const [comment, setcomment] = useState('');
    const [salary, setsalary] = useState('');
  
  
    const params = useParams();
  
    const getSelectedStaff = () => {
      axios.get(`http://localhost:8345/staff/viewstaff/${params.id}`)
        .then((response) => {
          console.log(response.data);
        //  setValues(response.data.data);
        setfirstname(response.data.firstname);
        setlastname(response.data.lastname);
        setstaffid(response.data.staffId);
        setphone(response.data.phone);
        setemail(response.data.staffemail);
        setpossition(response.data.possition); 
        setaddress(response.data.address);
        setdateofbirth(response.data.dateofbirth);
        setwortype(response.data.wortype);
        setcomment(response.data.comment);
        setsalary(response.data.salary);
        })
    }
  
   

    useEffect(() => {
        getSelectedStaff();
    }, []);
  
    const updateGroupDetails = (e) => {
      e.preventDefault();
  
      let updateData = {
        firstname: firstname,
        lastname: lastname,
        staffId: staffId,
        phone: phone,
        staffemail: staffemail,
        possition: possition,
        address: address,
        dateofbirth: dateofbirth,
        wortype: wortype,
        comment: comment,
        salary: salary,
      }
  
      axios.put(`http://localhost:8345/staff/updatestaff/${params.id}`,updateData)
    //   .then((res)=> {AlertMsg("success", "success", res.data); window.location = `/addstaff`})
    //   .catch((err) => AlertMsg("error", "error", err.message))
        .then((response) => { console.log(response.data); window.location = `/viewstaff`})
        .catch((error) => { console.log(error); })
    }

 
    return(
    <div>
        
        <Navbar/>

        <div >
    <section class="Staff-form dark">
        
      <div class="container">
        <form>
         
          {/* use for title */}
            <div class="products">

               <div class="title">Edit Staff</div>
          
           </div>
           


          <div class="card-details">

           
            <div class="row">    
             
                {/* For Input fields that wants column  */}
            
              <div class="form-group col-sm-6">
                <label for="card-holder">First Name</label>
     
                  <input 
                     
                     type="text"
                     class="form-control ml-1" 
                     placeholder="First Name" 
                     aria-label="First Name" 
                     aria-describedby="basic-addon1" 
                     name="firstname"
                     onChange={(e) => setfirstname(e.target.value)}
                     value={firstname}
                     />
              </div>

              <div class="form-group col-sm-6">
                <label for="">Last Name</label>
               
                   <input 
                      type="text" 
                      class="form-control ml-1" 
                      placeholder="Last Name" 
                      aria-label="Last Name" 
                      aria-describedby="basic-addon1"
                      name="lastname"
                        onChange={(e) => setlastname(e.target.value)}
                        value={lastname}
                      />

                      {/* IF someone need a / betwen input fields */}
                          {/* <span class="date-separator">/</span> */}
            
              
              </div>

              <div class="form-group col-sm-6">
                <label for="card-holder">Staff ID</label>
     
                  <input 
                     type="text" 
                     class="form-control ml-1" 
                     placeholder="Staff ID" 
                     aria-label="Staff ID" 
                     aria-describedby="basic-addon1"
                     name="staffId"
                        onChange={(e) => setstaffid(e.target.value)}
                        value={staffId}
                     />
              </div>

              <div class="form-group col-sm-6">
                <label for="">Phone</label>
               
                 
                   <input 
                      type="text" 
                      class="form-control ml-1" 
                      placeholder="Phone No" 
                      aria-label="Phone No" 
                      aria-describedby="basic-addon1" 
                      name="phone"
                        onChange={(e) => setphone(e.target.value)}
                        value={phone}
                      />

                </div>
            
              <div class="form-group col-sm-12">
                 <label for="">E-Mail</label>
               
               
                 <input 
                    type="text" 
                    class="form-control ml-1" 
                    placeholder="E-mail" 
                    aria-label="E-mail" 
                    aria-describedby="basic-addon1" 
                    name="staffemail"
                        onChange={(e) => setemail(e.target.value)}
                        value={staffemail}
                    />

               </div>


               <div class="form-group col-sm-6">
                <label for="card-holder">Date of Birth</label>
     
                  <input 
                     type="date" 
                     class="form-control ml-1" 
                     aria-label="Staff ID" 
                     aria-describedby="basic-addon1"
                     name="dateofbirth"
                        onChange={(e) => setdateofbirth(e.target.value)}
                        value={dateofbirth}
                     />
              </div>

              <div class="form-group col-sm-6">
                <label for="">Salary</label>
               
                 
                   <input 
                      type="text" 
                      class="form-control ml-1" 
                      placeholder="Salary"
                      aria-label="Salary" 
                      aria-describedby="basic-addon1" 
                      name="salary"
                        onChange={(e) => setsalary(e.target.value)}
                        value={salary}
                      />

                </div>

                
              <div class="form-group col-sm-12">
                 <label for="">Address</label>
               
               
                 <input 
                    type="text" 
                    class="form-control ml-1" 
                    placeholder="Address" 
                    aria-label="Address" 
                    aria-describedby="basic-addon1"
                    name="address"
                        onChange={(e) => setaddress(e.target.value)}
                        value={address}
                    />

               </div>

               
              <div class="form-group col-sm-12">
                 <label for="">Apply Position</label>
               
               
                 <input 
                    type="text" 
                    class="form-control ml-1" 
                    placeholder="Apply Position" 
                    aria-label="Apply Position" 
                    aria-describedby="basic-addon1"
                    name="possition"
                        onChange={(e) => setpossition(e.target.value)}
                        value={possition}
                    />

               </div>

               
              <div class="form-group col-sm-12">
                 <label for="">Work Type</label>
               
               
                 <input 
                    type="text" 
                    class="form-control ml-1" 
                    placeholder="Work Type" 
                    aria-label="Work Type" 
                    aria-describedby="basic-addon1"
                    name="wortype"
                        onChange={(e) => setwortype(e.target.value)}
                        value={wortype}
                    />

               </div>

               <div class="form-group col-sm-12">
                 <label for="">Comment</label>
               
               
                 <input 
                    type="text" 
                    class="form-control ml-1" 
                    placeholder="Comment" 
                    aria-label="Comment" 
                    aria-describedby="basic-addon1"
                    name="comment"
                        onChange={(e) => setcomment(e.target.value)}
                        value={comment}
                    />

               </div>
              
               <div class="btngroup col-sm-3">
                <button type="button" class="cancel">Clear</button>
              </div>

             
              <div class="btngroup ml-3 col-sm-3">
                <button type="button" class="submit" onClick={updateGroupDetails}>Edit</button>
              </div>

            </div>
          </div>
        </form>
      </div>
    </section>
  </div>
        <Footer />
    </div>
)
}

export default EditStaff;