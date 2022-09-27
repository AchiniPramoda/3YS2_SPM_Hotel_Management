import React from "react";
import { useState, useEffect } from "react";
import './AdminDashboard.css';
import Navbar from "../Navbar/AdminNavbar/AdminNavbar";
import image01 from "../../assets/images/roomDS.jpg";
import image02 from "../../assets/images/hallDS.jpg";
import image03 from "../../assets/images/foodDS.jpg";
import image04 from "../../assets/images/packageDS.jpg";
import axios from "axios";

function AdminDashBoard() {

  const [count, setCount] = useState({
    roomCount: 0,
    hallCount: 0,
    foodCount: 0,
    packageCount: 0,
  });

  useEffect(() => {
    // axios.get("http://localhost:8345/room/count").then((res) => {
    //   setCount({ ...count, roomCount: res.data });
    // });
    axios.get("http://localhost:8345/hall/get").then((res) => {
      setCount({ ...count, hallCount: res.data });
    });
    // axios.get("http://localhost:8345/food/count").then((res) => {
    //   setCount({ ...count, foodCount: res.data });
    // });
    // axios.get("http://localhost:8345/package/count").then((res) => {
    //   setCount({ ...count, packageCount: res.data });
    // });
  }, []);
   

    return (
      <div>
            
        <Navbar />

          
  
           <div className="row">

              <div class="card" className="card">
                  <img src = {image01} class="card-img-top" />
                      <div class="topic">Room</div>
                      
               </div>

               <div class="card" className="card">
                  <img src = {image02} class="card-img-top" />
                      <div class="topic">Hall</div>

               </div>

               <div class="card" className="card">
                  <img src = {image03} class="card-img-top" />
                      <div class="topic">Food</div>

               </div>

               <div class="card border-success mb-" className="card">
                  <img src = {image04} class="card-img-top" />
                      <div class="topic">Package</div>

               </div>

           </div>

           
           <div className="row">

              <div className="cardsmall">
              <div class="countName">Room</div>
               {/* <div>{count.hallCount}</div> */}

              </div>

              <div className="cardsmall">
              <div class="countName">Hall</div>
               {/* <div>{count.hallCount}</div> */}

              </div>

              <div className="cardsmall">
              <div class="countName">Food</div>
               {/* <div>{count.hallCount}</div> */}

              </div>

              <div className="cardsmall">
              <div class="countName">Package</div>
               {/* <div>{count.hallCount}</div> */}

              </div>
           </div>


        </div>
           
    );
} 

export default AdminDashBoard;