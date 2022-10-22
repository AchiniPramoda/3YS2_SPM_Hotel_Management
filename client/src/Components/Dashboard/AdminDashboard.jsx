import React from "react";
import './AdminDashboard.css';
import Navbar from "../Navbar/AdminNavbar/AdminNavbar";
import image01 from "../../assets/images/roomDS.jpg";
import image02 from "../../assets/images/hallDS.jpg";
import image03 from "../../assets/images/foodDS.jpg";
import image04 from "../../assets/images/packageDS.jpg";
import axios from "axios";
import Footer from "../Footer/Footer";

  export default class AdminDashBoard extends React.Component {
    constructor(props) {
      super(props);
    
      this.state = {
        roomCount: 0,
        hallCount: 0,
        foodCount: 5,
        packageCount: 0,
      }
    }

  componentDidMount() { 
    
      axios.get("http://localhost:8345/hall/get")
      .then((res) => { this.setState({ 
        hallCount: res.data.length }) })
      .catch((err) => { console.log(err) });

      axios.get("http://localhost:8345/room/getroom")
      .then((res) => { this.setState({
        roomCount: res.data.length }) })
      .catch((err) => { console.log(err) });



      axios.get("http://localhost:8345/api/category")
      .then((res) => { this.setState({
        packageCount: res.data.length }) })
      .catch((err) => { console.log(err) });




}


  render() {
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


      
           <div className="row">

              <div className="cardsmall">
              <div class="countName">Room</div>
              <div className="countfont">{this.state.roomCount}</div>

              </div>

              <div className="cardsmall">
              <div class="countName">Hall</div>
               <div className="countfont">{this.state.hallCount}</div>

              </div>

              <div className="cardsmall">
              <div class="countName">Food</div>
               <div className="countfont">{this.state.foodCount}</div>

              </div>

              <div className="cardsmall">
              <div class="countName">Package</div>
               <div className="countName">{this.state.packageCount}</div>

              </div>
           </div>
           <br/>

           </div>
           <br/>
            <Footer />
           </div>

   
        
    );}}
  
