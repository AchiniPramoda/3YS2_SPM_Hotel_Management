import React, { useState } from "react";
import { Link } from "react-router-dom";
import hotel from "../../../assets/images/hotel.png"
import "../navbar.css";

function AdminNavbar() {

    const [state, setState] = useState({
        menu: false,
        isOpen1: false,
        isOpen2: false,
        isClosed1: true,
        isClosed2: true,
        
        homeLinkClass: "nav-item nav-link",
        aboutLinkClass: "nav-item nav-link",
        menuClass: ""
      });
    
      const toggleMenu = () => {
        console.log("toggleMenu");
        setState({
          ...state,
          menu: !state.menu
        });
      };
    
      const toggleOpenstaff = () => setState({ ...state, isOpen1: !state.isOpen1 });
      const toggleOpenroom = () => {
        
        setState({ ...state, isOpen2: !state.isOpen2 });
      }
    
      const show1 = state.menu ? "show" : "";
      const show2 = state.menu ? "show" : "";
      const menuClass1 = `dropdown-menu${state.isOpen1 ? " show" : ""}`;
      const menuClass2 = `dropdown-menu${state.isOpen2 ? " show" : ""}`;
    
    return (

        

        <div className="header">
    
       
            <img className="imageheader" src = { hotel } alt="Hotel" />
        

        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
               <button 
                  class="navbar-toggler" 
                  type="button" 
                  data-toggle="collapse" 
                  data-target="#navbarTogglerDemo01" 
                  aria-controls="navbarTogglerDemo01" 
                  aria-expanded="false" 
                  aria-label="Toggle navigation" 
                  onClick={toggleMenu}
                  >
                  <span class="navbar-toggler-icon"></span>
              </button>
        
       
                    
      
          <ul class="navbar-nav mr-auto px-5 mt-lg-0">
            <div>
            <li class="nav-item dropdown"> 

            <div className={"collapse navbar-collapse " + show1}>
              <div className="dropdown" onClick={toggleOpenstaff}>
                   <div
                       className="nav-link"
                       id="dropdownMenuButton"
                       data-toggle="dropdown"
                       aria-haspopup="true"
                     >
                         Staff
                     </div>
                <ul>    
                     <div className={menuClass1} aria-labelledby="dropdownMenuButton">
                       <Link className="dropdown-item" to="/addstaff">
                          Add Staff
                       </Link>
                       <Link className="dropdown-item" to="/viewstaff">
                         View Staff
                       </Link>
                     </div>
                </ul>
                   </div>
              </div>
              </li>
              </div>
              <div>
              <li class="nav-item dropdown">  
              <div className={"collapse navbar-collapse " + show2}>     
                <div className="dropdown" >
                   <div
                       className="nav-link"
                       id="dropdownMenuButton"
                       data-toggle="dropdown"
                       aria-haspopup="true"
                       onClick={toggleOpenroom}
                     >
                         Room
                     </div>
                    
                     <div  className={menuClass2}aria-labelledby="dropdownMenuButton">
                       <Link className="dropdown-item" to="/addroom">
                          Add Room
                       </Link>
                       <Link className="dropdown-item" to="/viewroom">
                         View Room
                       </Link>
                     </div>
                   </div>

              </div>
              </li>
              </div>
              

                <li class="nav-item col-sm-2 active">
                      <a class="nav-link" href="/admindashboard">Room<span class="sr-only">(current)</span></a>
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
     
    </nav>
        
  </div>
    );
}

export default AdminNavbar;