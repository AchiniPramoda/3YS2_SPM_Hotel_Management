import React from "react";
import "./Profileview.css";
import Navbar from "../Navbar/Navbar";

function ProfileView() {
  return (
    <div>
      <Navbar />
      <section class="profile-form dark">
           <div className="container"> 
            <form>

            <div class="products">

                  <div class="title">Your Profile</div>

            </div>
         
                 <div class="card-details">
                   
                    <div class="pronames">First Name  : </div>
                   
                    <div class="pronames">Last Name   : </div>

                    <div class="pronames">E-mail      : </div>

                    <div class="pronames">City        : </div>
                   
                    <div class="pronames">Password    : </div>
                    
                  
                  
                  
                   <div class="card-footer">
                      
                         
                      <button  type="button" className="editbtn">Edit</button>
                          

                    
                   </div>
               </div>
           </form>
           <br/>
       </div>
</section>
  </div>
  );
}

export default ProfileView;