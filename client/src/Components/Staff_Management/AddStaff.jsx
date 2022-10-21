
import React from "react";
import axios from "axios";
import './staff.css';
import  {Alert} from './Alert/staffAlert';
import Validation from './Validation/StaffValidation';
 import Navbar from "../Navbar/AdminNavbar/AdminNavbar";
import Footer from "../Footer/Footer";


export default class Add extends React.Component{

    constructor(props) {
        super(props);
        
        this.state = {            
          firstname : "",
          lastname : "",
          staffId : "",
          phone : "",
          staffemail : "",
          dateofbirth : "",
          salary : "",
          address : "",
          possition : "",
          wortype : "",
          comment : "",
           
        }
    }
       // Function for Check Status code
       handleError = (err) => {
        if (err) {
            if (err.response) {
                if (err.response.status === 404) {
                    Alert("error", "Something went wrong!", err.response.data)

                }
            } else {
                Alert("error", "Something went wrong.", err)

            }
        }
    }
    onChange = (e) => {        
        this.setState({[e.target.id]: e.target.value});
        console.log(e.target.value);
    }


  



    onSubmit =  (e) => {
        e.preventDefault();

        const result = Validation({
            firstname : this.state.firstname,
            lastname : this.state.lastname,
            staffId : this.state.staffId,
            phone : this.state.phone,
            staffemail : this.state.staffemail,
            dateofbirth : this.state.dateofbirth,
            salary : this.state.salary,
            address : this.state.address,
            possition : this.state.possition,
            wortype : this.state.wortype,
            comment : this.state.comment,
            
        });

       
     if(result.status){
       
        let staffData = {
            firstname : this.state.firstname,
            lastname : this.state.lastname,
            staffId : this.state.staffId,
            phone : this.state.phone,
            staffemail : this.state.staffemail,
            dateofbirth : this.state.dateofbirth,
            salary : this.state.salary,
            address : this.state.address,
            possition : this.state.possition,
            wortype : this.state.wortype,
            comment : this.state.comment,

           
            }
            console.log(staffData);
      axios.post("http://localhost:8345/staff/addstaff", staffData)
     
        
         
        .then((res) => {
          console.log("staff added");
            Alert( "success", "staff Added Successfully");
            console.log(res.data);    
            window.location.href = "/viewstaff";                                                         
        }).catch(err => {
            this.handleError(err);
            console.log(err);
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
                <section class="Hall-form dark">
                    
                  <div class="container">

                    <form >
                     
               
                           <div class="products">
                               <div class="title">Staff Add</div>
                            </div>
                      
            
            
                      <div class="card-details">
                       
                        <div class="row">    

                        
                        <div class="form-group col-sm-6">
                            <label for="">First Name</label>

  
                            <input
                                type="text"
                                class="form-control ml-0"
                                placeholder="First Name"
                                aria-label="First Name"
                                aria-describedby="basic-addon1"
                                id="firstname"

                                onChange={(e) => this.onChange(e)}
                                />

                        </div>

                        <div class="form-group

                          col-sm-6">  

                            <label for="">Last Name</label>

                            <input
                                type="text" 
                                class="form-control ml-0"
                                placeholder="Last Name"
                                aria-label="Last Name"
                                aria-describedby="basic-addon1"
                                id="lastname"
                                onChange={(e) => this.onChange(e)}
                                />

                        </div>

                        <div class="form-group


                          col-sm-6">

                            <label for="">Staff ID</label>

                            <input
                                type="text"
                                class="form-control ml-0"
                                placeholder="Staff ID"
                                aria-label="Staff ID"
                                aria-describedby="basic-addon1"
                                id="staffId"
                                onChange={(e) => this.onChange(e)}
                                />

                        </div>

                        <div class="form-group


                          col-sm-6">  

                            <label for="">Phone</label>

                            <input
                                type="text"
                                class="form-control ml-0"
                                placeholder="Phone"
                                aria-label="Phone"
                                aria-describedby="basic-addon1"
                              
                                id="phone"
                              
                                onChange={(e) => this.onChange(e)}
                            
                                value={this.state.phone}
                                />

                        </div>

                        <div class="form-group


                          col-sm-6">  

                            <label for="">Email</label>

                            <input
                                type="text"

                                class="form-control ml-0"
                                placeholder="Email"
                                aria-label="Email"
                                aria-describedby="basic-addon1"
          
                                id="staffemail"
                                onChange={(e) => this.onChange(e)}

                                />

                        </div>

                        <div class="form-group


                          col-sm-6">  

                            <label for="">Date of Birth</label>

                            <input
                                type="date" 
                                class="form-control ml-0"
                                placeholder="Date of Birth"
                                aria-label="Date of Birth"
                                aria-describedby="basic-addon1"
                                name="dateofbirth"
                                id="dateofbirth"
                                onChange={(e) => this.onChange(e)}
                                />

                        </div>

                        <div class="form-group


                          col-sm-6">

                            <label for="">Salary</label>

                            <input
                                type="text"
                                class="form-control ml-0"
                                placeholder="Salary"
                                aria-label="Salary"
                                aria-describedby="basic-addon1"
                                name="salary"
                                id="salary"
                                onChange={(e) => this.onChange(e)}
                                />

                        </div>

                        <div class="form-group


                          col-sm-6">      

                            <label for="">Address</label>

                            <input
                                type="text" 
                                class="form-control ml-0"
                                placeholder="Address"
                                aria-label="Address"
                                aria-describedby="basic-addon1"
                                // name="address"
                                id="address"
                                onChange={(e) => this.onChange(e)}
                                />

                        </div>

                        <div class="form-group


                          col-sm-6">    

                            <label for="">Possition</label>

                            <input
                                type="text"     
                                class="form-control ml-0"
                                placeholder="Possition"
                                aria-label="Possition"
                                aria-describedby="basic-addon1"
                                
                                id="possition"
                                onChange={(e) => this.onChange(e)}
                                />



                        </div>
                       

                        <div class="form-group


                          col-sm-6">  

                            <label for="">Work Type</label>                   
                            <select class="form-control ml-0" name="worktype" id="wortype"  onChange={(e) => this.onChange(e)}>
                                <option value="Full Time">Full Time</option>          
                                <option value="Part Time">Part Time</option>
                            </select>

                        </div>

                        <div class="form-group


                          col-sm-6">    

                            <label for="">Comment</label>

                            <input
                                type="text"     
                                class="form-control ml-0"
                                placeholder="comment"
                                aria-label="comment"
                                aria-describedby="basic-addon1"
                           
                                id="comment"
                                onChange={(e) => this.onChange(e)}
                                />



                          </div>


                        <div class="btngroup ml-6 col-sm-4">
                            <button type="button" class="cancel">Clear</button>
                          </div>
            
                         
                          <div class="btngroup ml-2 col-sm-4">
                            <button type="button" class="submit" onClick={(e) => this.onSubmit(e)} >Submit</button>
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
}










