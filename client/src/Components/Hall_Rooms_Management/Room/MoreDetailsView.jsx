
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import React, { useState } from "react";
import axios from "axios";
import card from './card.css';

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
            <div className="cont">
            <div className="container mt-12">
                
                   <div class="mmm">
                        
                            <div class="col-md">
                               
                                <img src={room.RoomImage} class="img-fluid rounded-start" alt={room.roomType}/>
                            </div>
                            <div class="col-md-24">
                                <div class="card-body px-5">
                                    <h3 class="card-title">{room.roomType}</h3>
                                    <hr />

                                    <h6 class="text-dark">Room Number</h6>
                                    <h6 class="text-secondary">{room.RooId}</h6>

                                    <h6 class="text-dark">Number of Beads :</h6>
                                    <h6 class="text-secondary">{room.beads}</h6>

                                    <h6 class="text-dark">Clients :</h6>
                                    <h6 class="text-secondary">{room.clients}</h6>

                                    <h6 class="text-dark">Description :</h6>
                                    <h6 class="text-secondary">{room.description}</h6>

                                    <h3 class="text-danger text-end">RS: {room.price} /-</h3>

                                    <div class="">
                            <button type="button" class="submit" >Rent</button>
                          </div>


                                </div>
                            </div>
                        </div>
                    </div> 
              
            </div>
        );
    }

export default Rooms;