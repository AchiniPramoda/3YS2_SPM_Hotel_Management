import React from "react";
import axios from "axios";
import './staff.css';
import  {Alert} from "./Alert/staffAlert"
import StaffValidations from "./Validation/StaffValidation.jsx";
import Navbar from "../Navbar/Navbar"



export default class Addstaff extends React.Component{

    constructor(props) {
        super(props);
        
        this.state = {            
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
          salary: "",
          open:true
        }
    }
       // Function for Check Status code
       handleError = (error) => {
        if (error) {
            if (error.response) {
                if (error.response.status === 404) {
                    Alert("error", "Something went wrong!", "Please try again later");

                }
            } else {
                Alert("error", "Something went wrong.", error)

            }
        }
    }

    onChange = (e) => {        
        this.setState({[e.target.id]: e.target.value});
        console.log(e.target.value);
    }



    onSubmit = (e) => {
        e.preventDefault();

        const result = StaffValidations({
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            staffid: this.state.staffid,
            phone: this.state.phone,
            email: this.state.email,
            possition: this.state.possition,
            address: this.state.address,
            wortype: this.state.wortype,
            dateofbirth: this.state.dateofbirth,
            comment: this.state.comment,
            salary: this.state.salary,
            
        });
       
     if(result.status){
        const formData = new FormData();
        formData.append('firstname', this.state.firstname);
        formData.append('lastname', this.state.lastname);
        formData.append('staffid', this.state.staffid);
        formData.append('phone', this.state.phone);
        formData.append('email', this.state.email);
        formData.append('possition', this.state.possition);
        formData.append('address', this.state.address);
        formData.append('dateofbirth', this.state.dateofbirth);
        formData.append("wortype", this.state.wortype);
        formData.append("comment", this.state.comment);
        formData.append("salary", this.state.salary);

      axios.post("http://localhost:8345/staff/addstaff", formData)
     
        
         
        .then((res) => {
          console.log("Staff added");
            Alert( "success", "Staff Added Successfully");
            console.log(res.data);                                                                
        }).catch(error => {
            this.handleError(error);
            console.log(error);
        })
        }else{
            Alert("error", "Form Validation Error!", result.error)

        }
    }
    render(){

        return (
            <div>

      <Navbar/>
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
                       id="firstname"
                       onChange={(e) => this.onChange(e)}
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
                        id="lastname"
                        onChange={(e) => this.onChange(e)}
                  
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
                       id="staffid"
                       onChange={(e) => this.onChange(e)}
                       
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
                        id="phone"
                        onChange={(e) => this.onChange(e)}
                    
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
                      id="email"
                      onChange={(e) => this.onChange(e)}
                  
                      />
  
                 </div>
  
  
                 <div class="form-group col-sm-6">
                  <label for="card-holder">Date of Birth</label>
       
                    <input 
                       type="date" 
                       class="form-control" 
                       aria-label="Staff ID" 
                       aria-describedby="basic-addon1"
                       id="dateofbirth"
                       onChange={(e) => this.onChange(e)}
                      
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
                        id="salary"
                        onChange={(e) => this.onChange(e)}
                      
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
                      id="address"
                      onChange={(e) => this.onChange(e)}
                      
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
                      id="possition"
                      onChange={(e) => this.onChange(e)}
                  
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
                      id="wortype"
                      onChange={(e) => this.onChange(e)}
                      
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
                      id="comment"
                      onChange={(e) => this.onChange(e)}
                      
                      />
  
                 </div>
                
                 <div class="btngroup col-sm-3">
                  <button type="button" class="cancel">Clear</button>
                </div>
  
               
                <div class="btngroup col-sm-3">
                <button type="button" class="submit" onClick={(e) => this.onSubmit(e)} >Submit</button>
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
}


