import React, { useState } from "react";
import { Link } from "react-router-dom";
import hotel from "../../../assets/images/hotel.png"
import "../navbar.css";

function AdminNavbar() {

    const [state, setState] = useState({
        menu: false,
        isOpen: false,
        homeLinkClass: "nav-item nav-link",
        aboutLinkClass: "nav-item nav-link",
        menuClass: ""
      });
    
      const toggleMenu = () => {
        setState({
          ...state,
          menu: !state.menu
        });
      };
    
      const toggleOpenstaff = () => setState({ ...state, isOpen: !state.isOpen });
      const toggleOpenroom = () => setState({ ...state, isOpen: !state.isOpen });
    
      const show = state.menu ? "show" : "";
      const menuClass = `dropdown-menu${state.isOpen ? " show" : ""}`;
    
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
        
              <div className={"collapse navbar-collapse " + show}>
                    
      
          <ul class="navbar-nav mr-auto px-5 mt-lg-0">
               
            <li class="nav-item dropdown">       
              <div className="dropdown" onClick={toggleOpenstaff}>
                   <div
                       className="nav-link"
                       id="dropdownMenuButton"
                       data-toggle="dropdown"
                       aria-haspopup="true"
                     >
                         Staff
                     </div>
                    
                     <div className={menuClass} aria-labelledby="dropdownMenuButton">
                       <Link className="dropdown-item" to="/addstaff">
                          Add Staff
                       </Link>
                       <Link className="dropdown-item" to="/viewstaff">
                         View Staff
                       </Link>
                     </div>
                   </div>
              </li>
             
              <li class="nav-item dropdown">       
                <div className="dropdown" onClick={toggleOpenroom}>
                   <div
                       className="nav-link"
                       id="dropdownMenuButton"
                       data-toggle="dropdown"
                       aria-haspopup="true"
                     >
                         Room
                     </div>
                    
                     <div className={menuClass} aria-labelledby="dropdownMenuButton">
                       <Link className="dropdown-item" to="/addroom">
                          Add Room
                       </Link>
                       <Link className="dropdown-item" to="/viewroom">
                         View Room
                       </Link>
                     </div>
                   </div>
              </li>

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
      </div>
    </nav>
        
  </div>
    );
}

export default AdminNavbar;