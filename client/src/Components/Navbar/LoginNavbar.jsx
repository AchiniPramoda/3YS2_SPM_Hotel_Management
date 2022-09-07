import React from "react";

import "./navbar.css";

import SignIn from "./SignInbtn";
import SignUp from "./signupbtn";

function LoginNavbar() {

     
     

 
     
    return (

        <div className="header">
    
        <div className="imageheader" >
             <div className="btngroup1">
                  
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
                      <a class="nav-link" href="/dashboard">Home <span class="sr-only">(current)</span></a>
                </li>
                
                <li class="nav-item col-sm-2 active">
                      <a class="nav-link" href="/dashboard">Room<span class="sr-only">(current)</span></a>
                </li>

                <li class="nav-item col-sm-2 active">
                      <a class="nav-link" href="/dashboard">Hall<span class="sr-only">(current)</span></a>
                </li>

                <li class="nav-item col-sm-2 active">
                      <a class="nav-link" href="/dashboard">Food <span class="sr-only">(current)</span></a>
                </li>

                <li class="nav-item col-sm-2 active">
                      <a class="nav-link" href="/dashboard">Package <span class="sr-only">(current)</span></a>
                </li>

            </ul>
    
        <form class="form-inline my-2 my-lg-0">
             <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
             <button type="button" class="btn btn-outline-warning waves-effect">Search</button>
        </form>
      </div>
    </nav>
        
  </div>
    );
}

export default LoginNavbar;