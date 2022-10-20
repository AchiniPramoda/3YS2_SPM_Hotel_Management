import React, { useState } from "react";
import axios from "axios";
import './Hall.css'
import { useParams } from "react-router-dom";
import { useEffect } from "react";

import  {Alert} from '../../alert/message.jsx';

import AdminNavbar from "../../../Navbar/AdminNavbar/AdminNavbar";

// import Navbar from "../../Navbar/AdminNavbar/AdminNavbar";



function UpdateHall () {

  

    const [HallId, setHallID]= useState('');
    const [name, setHallName]= useState('');
    const [hallType, setHalType]= useState('');
    const [Space, setSpace]= useState('');
    const [Guest, setGuest]= useState('');
    const [price, setPrice]= useState('');
    const [description, setDescription]= useState('');
    const [feacture, setFacilities]= useState('');
    const [event, setEvent]= useState('');
    const [HallImage, setHallImage]= useState();
    const [FileName, setFileName]= useState('Choose File');


  


    const params = useParams();

     const getHallData = () => {
        
        axios.get(`http://localhost:8345/hall/gethall/${params.id}`)
         .then((res) => {
           
            setHallID(res.data.HallId);
            setHallName(res.data.name);
            setHalType(res.data.hallType);
            setSpace(res.data.Space);
            setGuest(res.data.Guest);
            setPrice(res.data.price);
            setDescription(res.data.description);
            setFacilities(res.data.feacture);
            setEvent(res.data.event);
            setHallImage(res.data.HallImage);
            setFileName(res.data.fileName);
       
         })
        }

         useEffect(() => {
              getHallData();
         }, []);
     

        const onFileChange = (e) => {
            this.setState({
                HallImage:e.target.files[0],    
                fileName:e.target.files[0].name,

               
            })
        }  

         const updateHall = (e) => {
            e.preventDefault();

            
            let updateHall = {
                HallId:HallId,
                name:name,
                hallType:hallType,
                Space:Space,
                Guest:Guest,
                price:price,
                description:description,
                feacture:feacture,
                event:event,
                HallImage:HallImage,
                fileName:FileName

         }

            axios.put(`http://localhost:8345/hall/edit/${params.id}`, updateHall)
            .then((res) => {
                Alert( "success", "Hall Added Successfully");
          console.log(res.data);
           window.location = '/viewhall';})

       
            .catch((err) => {
                console.log(err);
            })
        }

        return (
            <>
    
    <AdminNavbar />
    
    <div >
        <section class="Staff-form dark">
            
          <div class="container">
            <form >
             
        
                <div class="products">
    
                   <div class="title">EDIT HALL DETAILS</div>
              
               </div>
              
    
              <div class="card-details">
    
               
                <div class="row">    
                 
                    
                
                  <div class="form-group col-sm-6">
                    <label for="name">Hall Name</label>
                    <input type="text" class="form-control ml-1" id="name" placeholder="Enter Hall Name" value={name} onChange={(e) => setHallName(e.target.value)} />
                    </div>



    
                    <div class="form-group col-sm-6">
                        <label for="type">Hall Type</label>
                        <input type="text" class="form-control ml-1" id="type" placeholder="Enter Hall Type" value={hallType} onChange={(e) => setHalType(e.target.value)} />
                    </div>

                    <div class="form-group col-sm-6">
                        <label for="space">Space</label>
                        <input type="text" class="form-control ml-1" id="space" placeholder="Enter Space" value={Space} onChange={(e) => setSpace(e.target.value)} />
                    </div>

                    <div class="form-group col-sm-6">
                        <label for="guest">Guest</label>
                        <input type="text" class="form-control ml-1" id="guest" placeholder="Enter Guest" value={Guest} onChange={(e) => setGuest(e.target.value)} />
                    </div>

                    <div class="form-group col-sm-6">
                        <label for="price">Price</label>
                        <input type="text" class="form-control ml-1" id="price" placeholder="Enter Price" value={price} onChange={(e) => setPrice(e.target.value)} />
                    </div>

                    <div class="form-group col-sm-6">

                        <label for="description">Description</label>
                        <textarea class="form-control ml-1"
                        id="description" placeholder="Enter Description" value={description} onChange={(e) => setDescription(e.target.value)} />
                    </div>

                    <div class="form-group col-sm-6">
                        <label for="facilities">Facilities</label>
                        <input type="text" class="form-control ml-1" id="facilities" placeholder="Enter Facilities" value={feacture} onChange={(e) => setFacilities(e.target.value)} />
                    </div>

                    <div class="form-group col-sm-6">
                        <label for="event">Event</label>
                        <input type="text" class="form-control ml-1" id="event" placeholder="Enter Event" value={event} onChange={(e) => setEvent(e.target.value)} />
                    </div>

                    <div class="form-group col-sm-12">
                        <label for="image">Image</label>
                        <input type="file" class="form-control ml-1" id="image" placeholder="Enter Image" value={HallImage} onChange={(e) => setHallImage(e.target.value)} />
                    </div>

                   <div class="btngroup col-sm-3">
                    <button type="button" class="cancel">Clear</button>
                  </div>
    
                 
                  <div class="btngroup ml-3 col-sm-3">
       
                    <button type="button" class="submit" onClick={updateHall} >Submit</button>
                  </div>
    
    
                </div>
             
              </div>
            </form>
          </div>
        </section>
      </div>
            
            </>
        )
    }
    
    export default UpdateHall;