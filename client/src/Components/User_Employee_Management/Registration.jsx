import React from "react";
import './login.css';

function Registration() {

    return (
        <div>

<section class="login-form dark">
        
        <div class="container">
          <form>
           
            {/* use for title */}
              <div class="products">
  
                 <div class="title">Registration</div>
            
             </div>
             
  
  
            <div class="card-details">
  
             
              <div class="row">    
               
               
                <div class="form-group col-sm-6">
                  <label for="card-holder">First Name</label>
       
                    <input 
                       type="text"
                       class="form-control " 
                       placeholder="First Name" 
                       aria-label="First Name" 
                       aria-describedby="basic-addon1" 
                    //    name="firstname"
                    //    onChange={handleStaffData}
                    //    value={values.firstname}
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
                        // name="lastname"
                        // onChange={handleStaffData}
                        // value={values.lastname}
                        />
  
                   
              
                
                </div>
  
                <div class="form-group col-sm-12">
                  <label for="card-holder">E-mail Address</label>
       
                    <input 
                       type="text" 
                       class="form-control" 
                       placeholder="E-mail" 
                       aria-label="E-mail" 
                       aria-describedby="basic-addon1"
                    //    name="staffid"
                    //    onChange={handleStaffData}
                    //    value={values.staffid}
                       />
                </div>
  
                <div class="form-group col-sm-12">
                  <label for="">Password</label>
                 
                   
                     <input 
                        type="text" 
                        class="form-control" 
                        placeholder="Password" 
                        aria-label="Password" 
                        aria-describedby="basic-addon1" 
                        // name="phone"
                        // onChange={handleStaffData}
                        // value={values.phone}
                        />
  
                  </div>
              
                <div class="form-group col-sm-12">
                   <label for="">City</label>
                 
                 
                   <input 
                      type="text" 
                      class="form-control" 
                      placeholder="City" 
                      aria-label="City" 
                      aria-describedby="basic-addon1" 
                    //   name="email"
                    //   onChange={handleStaffData}
                    //   value={values.email}
                      />
  
                 </div>
          
  
               
                <div class="btngroup col-sm-4">
                  <button type="button" class="submit">Register</button>
                </div>
  
              </div>
            </div>
          </form>
        </div>
      </section>



    </div>
    )
}


export default Registration;