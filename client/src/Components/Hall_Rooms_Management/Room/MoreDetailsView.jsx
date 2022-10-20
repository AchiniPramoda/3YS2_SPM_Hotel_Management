
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import React, { useState } from "react";
import axios from "axios";
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";
import StripeCheckout from "react-stripe-checkout";

function Rooms () {

    const [room, setRoom]= useState('');
   
    const [ amount, setAmount ] = useState(0);


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
     
     
         const handleToken = (token) => {
            fetch("/payment/donate", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ token, amount }),
            })
            .then(res => res.json())
            .then(_ => {
              window.alert("Transaction Successful.");
              console.log("Transaction Successful.");
            }).catch(_ => window.alert("Transaction Failed."))
          }
        
          const handleAmountChange = (e) => {
            const value = e.target.value;
            setAmount(value);
          };

        return (
            <div>
            <Navbar/>
            <br/>
            <div className="col">
            <div className="container mt-12">
                
                   <div class="mmm">
                        
                            <div class="col-md-24">
                               
                                <img src={room.RoomImage} class="img-fluid rounded-start " alt={room.roomType}/>
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
                            {/* <button type="button" class="submit" >Rent</button> */}
                          </div>
                          <StripeCheckout
                                className = "submit"
                           
                            stripeKey={process.env.REACT_APP_STRIPE_KEY || "pk_test_51Kx0rgIU9jSTt3OCJMP7GDgMje3tFcR8lA1gwHyeakh17PGmMdUAc50PFkfNwqL1NXJ5i14CZj99nG78OWFTG1FP00cRCW7t0m"}
                            token={handleToken}
                            name=""
                            panelLabel={`Donate`}
                            currency="USD"
                            amount={amount * 100}
                        >
                            
                        </StripeCheckout>

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