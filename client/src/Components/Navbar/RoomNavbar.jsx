import React from "react";
import "./RoomNavbar.css";
import ProfileNavigate from "./profilebtn";


function Roomnavbar() {

     
     

 
     
    return (

        <div className="header">
    
        <div className="imageheaderRoom" >
             <div className="btngroup1">
                    <ProfileNavigate/>
                   
              </div>
           
            </div>
            
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
              </button>
        
          <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                    
      
          <ul class="navbar-nav mr-auto px-5 mt-lg-0">
                <li class="nav-item col-sm-2 active">
                      <a class="nav-link" href="/admindashboard">Home <span class="sr-only">(current)</span></a>
                </li>
                
                <li class="nav-item col-sm-2 active">
                      <a class="nav-link" href="/admindashboard">Room<span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item col-sm-2 active">
                      <a class="nav-link" href="/rooms">View<span class="sr-only">(current)</span></a>
                </li>

                <li class="nav-item col-sm-2 active">
                      <a class="nav-link" href="/addhall">Hall<span class="sr-only">(current)</span></a>
                </li>

                <li class="nav-item col-sm-2 active">
                      <a class="nav-link" href="/admindashboard">Food <span class="sr-only">(current)</span></a>
                </li>

                <li class="nav-item col-sm-2 active">
                      <a class="nav-link" href="/admindashboard">Package <span class="sr-only">(current)</span></a>
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

export default Roomnavbar;