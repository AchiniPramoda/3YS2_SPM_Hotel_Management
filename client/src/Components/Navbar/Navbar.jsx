import React from "react";

function Navbar() {
    return (

        <div className="header">
        
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
              </button>
        
          <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                    
          
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li class="nav-item active">
                      <a class="nav-link" href="/admindashboard">Home <span class="sr-only">(current)</span></a>
                </li>
             
                <li class="nav-item active">
                      <a class="nav-link" href="/viewstaff">Staff <span class="sr-only">(current)</span></a>
                </li>

                <li class="nav-item active">
                      <a class="nav-link" href="#">Room <span class="sr-only">(current)</span></a>
                </li>

                <li class="nav-item active">
                      <a class="nav-link" href="#">Hall <span class="sr-only">(current)</span></a>
                </li>

                <li class="nav-item active">
                      <a class="nav-link" href="#">Resturent <span class="sr-only">(current)</span></a>
                </li>

                <li class="nav-item active">
                      <a class="nav-link" href="#">Package <span class="sr-only">(current)</span></a>
                </li>

    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
        
        </div>
    );
}

export default Navbar;