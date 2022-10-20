
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import React, { useState } from "react";
import axios from "axios";
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar"

function Rooms () {

    const [room, setRoom]= useState('');
   
  


    const params = useParams();

     const getRoomData = () => {
        axios.get(`http://localhost:8345/room/getroom/${params.id}`)
         .then((res) => {
            console.log(res.data);
            setRoom(res.data);

         })
        }

         useEffect(() => {
              getRoomData();
         }, []);
     

     

        return (
            <div>
            <Navbar/>
            <br/>
            <div className="col">
            <div className="container mt-12">
                
                   <div class="mmm">
                        
                            <div class="col-md">
                               
                                <img src={room.RoomImage} class="img-fluid rounded-start" alt={room.roomType}/>
                            </div>
                            <div class="col">
                                <div class="card-body">
                                    <h1 class="text ml-0">{room.roomType}</h1>
                                    <hr />

                                    <h6 class="text-dark ml-1">Room Number</h6>
                                    <h6 class="text-secondary ml-1">{room.RooId}</h6>

                                    <h6 class="text-dark ml-1">Number of Beads :</h6>
                                    <h6 class="text-secondary ml-1">{room.beads}</h6>

                                    <h6 class="text-dark ml-1">Clients :</h6>
                                    <h6 class="text-secondary ml-1">{room.clients}</h6>

                                    <h6 class="text-dark ml-1">Description :</h6>
                                    <h6 class="text-secondary ml-1">{room.description}</h6>

                                    <h3 class="text-danger text-end mt-5 mb-5">RS: {room.price} /-</h3>

                                    <div class="">
                            <button type="button" class="submit" >Rent</button>
                          </div>


                                </div>
                            </div>
                        </div>
                    </div> 
              
            </div>
            <Footer/>
            </div>
        );
    }

export default Rooms;