import React, { useState } from "react";
import { Link } from "react-router-dom";
import hotel from "../../../assets/images/hotel.png"
import "../navbar.css";

function AdminNavbar() {

    const [state, setState] = useState({
        menu: false,
        isOpen1: false,
        isOpen2: false,
        isOpen3: false,
        isOpen4: false,
        isOpen5: false,
        isClosed1: true,
        isClosed2: true,
        isClosed3: true,
        isClosed4: true,
        isClosed5: true,

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
      const toggleOpenroom = () =>  setState({ ...state, isOpen2: !state.isOpen2 });
      const toggleOpenhall = () =>  setState({ ...state, isOpen3: !state.isOpen3 });
      const toggleOpenfood = () => setState({ ...state, isOpen4: !state.isOpen4 });
      const togglePackage = () => setState({ ...state, isOpen5: !state.isOpen5 });
    
      const show1 = state.menu ? "show" : "";
      const show2 = state.menu ? "show" : "";
      const show3 = state.menu ? "show" : "";
      const show4 = state.menu ? "show" : "";
      const show5 = state.menu ? "show" : "";
      const menuClass1 = `dropdown-menu${state.isOpen1 ? " show" : ""}`;
      const menuClass2 = `dropdown-menu${state.isOpen2 ? " show" : ""}`;
      const menuClass3 = `dropdown-menu${state.isOpen3 ? " show" : ""}`;
      const menuClass4 = `dropdown-menu${state.isOpen4 ? " show" : ""}`;
      const menuClass5 = `dropdown-menu${state.isOpen5 ? " show" : ""}`;
    
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
            <li class="nav-item dropdown ml-5 text-whites"> 

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
              <li class="nav-item dropdown ml-5">  
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
              

                

              <div>
              <li class="nav-item dropdown ml-5">  
              <div className={"collapse navbar-collapse " + show3}>     
                <div className="dropdown" >
                   <div
                       className="nav-link"
                       id="dropdownMenuButton"
                       data-toggle="dropdown"
                       aria-haspopup="true"
                       onClick={toggleOpenhall}
                     >
                         Hall
                     </div>
                    
                     <div  className={menuClass3}aria-labelledby="dropdownMenuButton">
                       <Link className="dropdown-item" to="/addhall">
                          Add Hall
                       </Link>
                       <Link className="dropdown-item" to="/viewhall">
                         View Hall
                       </Link>
                     </div>
                   </div>

              </div>
              </li>
              </div>


              <div>
              <li class="nav-item dropdown ml-5">  
              <div className={"collapse navbar-collapse " + show4}>     
                <div className="dropdown" >
                   <div
                       className="nav-link"
                       id="dropdownMenuButton"
                       data-toggle="dropdown"
                       aria-haspopup="true"
                       onClick={toggleOpenfood}
                     >
                         Food
                     </div>
                    
                     <div  className={menuClass4}aria-labelledby="dropdownMenuButton">
                       <Link className="dropdown-item" to="/addhall">
                          Add Food
                       </Link>
                       <Link className="dropdown-item" to="/viewhall">
                         View Food
                       </Link>
                     </div>
                   </div>

              </div>
              </li>
              </div>


              <div>
              <li class="nav-item dropdown ml-4">  
              <div className={"collapse navbar-collapse " + show5}>     
                <div className="dropdown" >
                   <div
                       className="nav-link"
                       id="dropdownMenuButton"
                       data-toggle="dropdown"
                       aria-haspopup="true"
                       onClick={togglePackage}
                     >
                         Package
                     </div>
                    
                     <div  className={menuClass5}aria-labelledby="dropdownMenuButton">
                       <Link className="dropdown-item" to="/addhall">
                          Add Package
                       </Link>
                       <Link className="dropdown-item" to="/viewhall">
                         View Package
                       </Link>
                     </div>
                   </div>

              </div>
              </li>
              </div>


  
                

            </ul>
    
        {/* <form class="form-inline my-2 my-lg-0">
             <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
             <button type="button" class="btn btn-outline-warning waves-effect">Search</button>
        </form>
      */}
    </nav>
        
  </div>
    );
}

export default AdminNavbar;