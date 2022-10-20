
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import React, { useState } from "react";
import axios from "axios";
import card from './card.css';
import Footer from "../../../Footer/Footer";
import Navbar from '../../../Navbar/RoomNavbar';

function Halls () {

    const [hall, setHall]= useState('');
   
  


    const params = useParams();

     const getHallData = () => {
        axios.get(`http://localhost:8345/hall/get/${params.id}`)
         .then((res) => {
            console.log(res.data);
            setHall(res.data);

         })
        }

         useEffect(() => {
              getHallData();
         }, []);
     

     

        return (
            <div>
            <Navbar/>
            <br/>
            <div className="cont">
            <div className="container mt-12">
                
                   <div class="mmm">
                        
                            <div class="col-md">
                               
                                <img src={hall.hallImage} class="img-fluid rounded-start" alt={hall.hallType}/>
                            </div>
                            <div class="col-md-24">
                                <div class="card-body px-5">
                                    <h3 class="card-title">{hall.hallType}</h3>
                                    <hr />

                                    <h6 class="text-dark">Hall Name</h6>
                                    <h6 class="text-secondary">{hall.name}</h6>

                                    <h6 class="text-dark">Number of Guest :</h6>
                                    <h6 class="text-secondary">{hall.Guest}</h6>

                                 

                                    <h6 class="text-dark">Description :</h6>
                                    <h6 class="text-secondary">{hall.description}</h6>

                                    <h3 class="text-danger text-end">RS: {hall.price} /-</h3>

                                    <div class="">
                            <button type="button" class="submit" >Rent</button>
                          </div>


                                </div>
                            </div>
                        </div>
                    </div> 
              
            </div>

            <Footer />
            </div>
        );
    }

export default Halls;