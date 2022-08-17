import React from "react";
import './login.css';

function Login() {
  return (
    <div>
      
      <section class="login-form dark">
        
        <div class="container">
        <form>
         
          {/* use for title */}
            <div class="products">

               <div class="title">Login</div>
          
           </div>
           


          <div class="card-details">

           
            <div class="row">    
             
                {/* For Input fields that wants column  */}
            
              <div class="form-group col-sm-10">
                <label for="card-holder">User Name</label>
     
                  <input 
                     
                     type="text"
                     class="form-control " 
                     placeholder="User Name" 
                     aria-label="USer Name" 
                     aria-describedby="basic-addon1" 
                    //  name="firstname"
                    //  onChange={handleloginData}
                    //  value={values.firstname}
                     />
              </div>

           

              <div class="form-group col-sm-10">
                <label for="card-holder">Password</label>
     
                <input 
                      type="text" 
                      class="form-control" 
                      placeholder="password" 
                      aria-label="password" 
                      aria-describedby="basic-addon1"
                    //   name="lastname"
                    //   onChange={handleloginData}
                    //   value={values.lastname}
                      />
              </div>

            
             
              
             

             
              <div class="btngroup col-sm-4">
                <button type="button" class="submit" >Lgin</button>
              </div>

            </div>
          </div>
        </form>
      </div>
    </section>



    </div>
  );
}

export default Login;