import React, { useState } from "react";
import axios from "axios";
import "./room.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import  {Alert} from '../alert/message.jsx';
import Navbar from "../../Navbar/AdminNavbar/AdminNavbar";
import Footer from "../../Footer/Footer";


function UpdateRooms () {

    const [RoomId, setRoomID]= useState('');
    const [RoomType, setRoomType]= useState('');
    const [Beds, setBeds]= useState('');
    const [Clients, setClients]= useState('');
    const [Price, setPrice]= useState('');
    const [Description, setDescription]= useState('');
    const [Facilities, setFacilities]= useState('');
    const [RoomImage, setRoomImage]= useState();
    const [FileName, setFileName]= useState('Choose File');
  


    const params = useParams();

     const getRoomData = () => {
        axios.get(`http://localhost:8345/room/getroom/${params.id}`)
         .then((res) => {
            console.log(res.data);
            setRoomID(res.data.RooId);
            setRoomType(res.data.roomType);
            setBeds(res.data.beads);
            setClients(res.data.clients);
            setPrice(res.data.price);
            setDescription(res.data.description);
            setFacilities(res.data.facilities);
            setRoomImage(res.data.RoomImage);
            setFileName(res.data.fileName);

         })
        }

         useEffect(() => {
              getRoomData();
         }, []);
     

        const onFileChange = (e) => {
            this.setState({
                RoomImage:e.target.files[0],
                fileName:e.target.files[0].name,
               
            })
        }  

         const updateRoom = (e) => {
            e.preventDefault();

            
            let updateRoom = {
                RooId: RoomId,
                roomType: RoomType,
                beads: Beds,
                clients: Clients,
                price: Price,
                description: Description,
                facilities: Facilities,
                RoomImage: RoomImage,
                fileName: FileName
         }

         axios.put(`http://localhost:8345/room/editroom/${params.id}`, updateRoom)
             
         .then((res) => {
          Alert( "success", "Room Update Successfully");
          console.log(res.data);
           window.location = '/viewRoom';})

            .catch((err) => {console.log(err);})
            }

    return (
        <>
  <Navbar />

<div >
    <section class="Staff-form dark">
        
      <div class="container">
        <form >
         
    
            <div class="products">

               <div class="title">UPDATE ROOM DETAILS</div>
          
           </div>
          

          <div class="card-details">

           
            <div class="row">    
             
                
            
              <div class="form-group col-sm-6">
                <label for="card-holder">Room ID</label>
     
                  <input 
                     
                     type="text"
                     class="form-control ml-1" 
                     placeholder="Room ID" 
                     aria-label="Room ID" 
                     aria-describedby="basic-addon1" 
                     value={RoomId}
                     onChange = {(e) => setRoomID(e.target.value)}
                    
                     />
              </div>

              
                {/* <div class="form-group col-sm-6">
                <label for="card-holder">Room Type</label>

                    <input
                        type="text"
                        class="form-control ml-1"
                        placeholder="Room Type"
                        aria-label="Room Type"
                        aria-describedby="basic-addon1"
                        value={RoomType}
                        onChange={(e) => setRoomType(e.target.value)}       
                      
                        />
                </div> */}

                <div class="form-group col-sm-6">
                            <label for="card-holder">Room Type</label>
                                         <select
                                          value={RoomType}
                                          onChange={(e) => setRoomType(e.target.value)}       
                                        
                                            type="text"
                                            id="roomType"
                                    class="form-control ml-1"
                                    placeholder="Room Type"
                                    aria-label="Room Type"
                                    aria-describedby="basic-addon1">
                                            <option  value={"--Select Type--"}>--Select Category--</option>
                                            <option value="Queen">Queen</option>
                                           <option value="Dubble">Dubble </option>
                                            <option value="Another">Another</option>
                                        </select>
                               
                            </div>

                <div class="form-group col-sm-6">
                <label for="card-holder">Beads</label>

                    <input
                        type="number"
                        class="form-control ml-1"
                        placeholder="Beads"
                        aria-label="Beads"
                        aria-describedby="basic-addon1"
                        value={Beds}
                        onChange={(e) => setBeds(e.target.value)}
                        />
                </div>
                <div class="form-group col-sm-6">
                <label for="card-holder">Clients</label>

                    <input
                        type="number"
                        class="form-control ml-1"
                        placeholder="Clients"
                        aria-label="Clients"
                        aria-describedby="basic-addon1"
                        value={Clients}
                        onChange={(e) => setClients(e.target.value)}
                        />
                </div>
                <div class="form-group col-sm-6">
                <label for="card-holder">Price</label>

                    <input
                        type="number"
                        class="form-control ml-1"
                        placeholder="Price"
                        aria-label="Price"
                        aria-describedby="basic-addon1"
                        value={Price}
                        onChange={(e) => setPrice(e.target.value)}
                        />
                </div>
                <div class="form-group col-sm-12">
                <label for="card-holder">Description</label>
                <textarea class="form-control ml-1"
                        placeholder="Description"
                        aria-label="Description"
                       value={Description}
                        onChange={(e) => setDescription(e.target.value)}
                        />
                </div>
                <div class="form-group col-sm-12">
                <label for="card-holder">Facilities</label>

                    <input
                        type="textarea"
                        class="form-control ml-1"
                        placeholder="Facilities"
                        aria-label="Facilities"
                        aria-describedby="basic-addon1"
                        value={Facilities}
                        onChange={(e) => setFacilities(e.target.value)}
                        />
                </div>
                <div class="form-group col-sm-12">
                <label for="card-holder">Room Image</label>
                 <input type="file" class="form-control ml-1" name="RoomImage" onChange={(e) => this.onFileChange(e)}  />
                </div>
            


              
               <div class="btngroup  col-sm-3">
                <button type="button" class="cancel">Clear</button>
              </div>

             
              <div class="btngroup ml-4 col-sm-3">
                <button type="button" class="submit" onClick={updateRoom} >Submit</button>
              </div>


            </div>
         
          </div>
        </form>
      </div>
    </section>
  </div>
  <Footer />
        
        </>
    )
}

export default UpdateRooms;