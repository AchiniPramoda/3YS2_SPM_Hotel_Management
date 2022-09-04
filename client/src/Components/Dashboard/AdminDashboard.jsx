import React from "react";
import './AdminDashboard.css';
import Navbar from "../Navbar/Navbar";

function AdminDashBoard() {
    return (
        <div>
            
            <Navbar />
              <div class="card border-success mb-" className="card">
                  <div class="card-header">Header</div>
                    <div class="card-body">
                     <h5 class="card-title">Primary card title</h5>
                       <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
               </div>


            </div>
           
    );
} 

export default AdminDashBoard;