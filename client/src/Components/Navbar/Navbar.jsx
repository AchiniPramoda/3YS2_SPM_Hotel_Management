import React from "react";
import "./navbar.css";
import ProfileNavigate from "./profilebtn";
import SignIn from "./SignInbtn";
import SignUp from "./signupbtn";


function Navbar() {

     
     

 
     
    return (

        <div className="header">
    
{/*        
            <img className="imageheader" src = { hotel } alt="Hotel" /> */}

<div className="imageheader" >
             <div className="btngroup1">
                    <ProfileNavigate/>
                    <SignIn/>
                     <SignUp/>
              </div>
            {/* <img className="imageheader" src = { hotel } alt="Hotel" /> */}
            </div>

        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
              </button>
        
          <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                    
      
          <ul class="navbar-nav mr-auto px-5 mt-lg-0">
                <li class="nav-item col-sm-2 active">
                      <a class="nav-link" href="/clientdashboard">Home <span class="sr-only">(current)</span></a>
                </li>
                
                <li class="nav-item col-sm-2 active">
                      <a class="nav-link" href="/rooms">Room<span class="sr-only">(current)</span></a>
                </li>

                <li class="nav-item col-sm-2 active">
                      <a class="nav-link" href="/halls">Hall<span class="sr-only">(current)</span></a>
                </li>

                <li class="nav-item col-sm-2 active">
                      <a class="nav-link" href="/admin/restaurants">Food <span class="sr-only">(current)</span></a>
                </li>

                <li class="nav-item col-sm-2 active">
                      <a class="nav-link" href="/admindashboard">Package <span class="sr-only">(current)</span></a>
                </li>

            </ul>
    
        {/* <form class="form-inline my-2 my-lg-0">
             
             <button type="button" className="adminMain">Search</button>
        </form> */}
      </div>
    </nav>
        
  </div>
    );
}

export default Navbar;