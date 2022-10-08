import React, { useState } from "react";
import axios from "axios";
//import "./room.css";
import { useParams ,Link} from "react-router-dom";
import { useEffect } from "react";
//import  {Alert} from '../alert/message.jsx';
import '../../../../src/index.css';
import Navbar from "../../Navbar/NavbarResAdmin";
import { MdArrowBackIosNew } from "react-icons/md"
import {BsCardList} from "react-icons/bs"


function UpdateRestaurant () {

    const [restaurantName, setRestaurantName]= useState('');
    const [description, setDescription]= useState('');
    const [other, setOther]= useState('');
    const [imageURL, setimageURL]= useState();
    const [FileName, setFileName]= useState('Choose File');
  


    const params = useParams();

     const getRestaurantData = () => {
        axios.get(`http://localhost:8345/api/restaurants/${params.id}`)
         .then((res) => {
            console.log(res.data);
            setRestaurantName(res.data.restaurantName);
            setDescription(res.data.description);
            setOther(res.data.other);
            setimageURL(res.data.imageURL);
            setFileName(res.data.fileName);

         })
        }

         useEffect(() => {
              getRestaurantData();
         }, []);
     

        const onFileChange = (e) => {
            this.setState({
                imageURL:e.target.files[0],
                fileName:e.target.files[0].name,
               
            })
        }  

         const UpdateRestaurant = (e) => {
            e.preventDefault();

            
            let UpdateRestaurant = {
                restaurantName: restaurantName,
                description: description,
                other: other,
                imageURL: imageURL,
                fileName: FileName
         }

         axios.put(`http://localhost:8345/api/restaurants/UpdateRestaurant/${params.id}`, UpdateRestaurant)
             
         .then((res) => {
          //Alert( "success", "Room Added Successfully");
          console.log(res.data);
           window.location = '/admin/ALL';})

            .catch((err) => {console.log(err);})
            }

    return (
        <>


<div >
<Navbar />
        
      <div className="container1">
        
         
    
      <div className="row g-0">
                        <div className="cl">
                            <div className="card-body">
                            <h4 className="card-title  mt-3">Add Restuarant</h4>
                            <hr classNameName="mb-3" />
          <div class="card-details">

           
               
             
                
            
              <div className="mb-3">
              <label for="other" className="form-label">Name Of the Restuarant</label>
     
                  <input 
                     
                     type="text"
                     class="form-control " 
                     placeholder="Room ID" 
                     aria-label="Room ID" 
                     aria-describedby="basic-addon1" 
                     value={restaurantName}
                     onChange = {(e) => setRestaurantName(e.target.value)}
                    
                     />
              </div>

              <div className="mb-3">
                                        <label for="name" className="form-label">Description</label>
     
                  <input 
                     
                     type="text"
                     class="form-control " 
                     placeholder="Room ID" 
                     aria-label="Room ID" 
                     aria-describedby="basic-addon1" 
                     value={description}
                     onChange = {(e) => setDescription(e.target.value)}
                    
                     />
              </div>

              <div className="mb-3">
                                        <label for="other" className="form-label">Other</label>
     
                  <input 
                     
                     type="text"
                     class="form-control " 
                     placeholder="Room ID" 
                     aria-label="Room ID" 
                     aria-describedby="basic-addon1" 
                     value={other}
                     onChange = {(e) => setOther(e.target.value)}
                    
                     />
              </div>

              <label for="other" className="form-label">Image</label>
              <tr className='gap'></tr>
                                    <div class="custom-file mb-3">
                 <input type="file" class="custom-file-input" id="customFile" name="filename" accept="image/*" onChange={(e) => this.onFileChange(e)}  />
                 <label class="custom-file-label" for="customFile">Add Image here</label>
                </div>
            
                
              <div className="col-md-7">
                                        <img src={imageURL} className="resturantImageadd" alt="..." />
                                    </div>
             
              <div className="d-grid gap-2 mx-auto">
                <button type="button"  className="submitResturant" onClick={UpdateRestaurant} >Submit</button>
              </div>


            </div>
         
          </div>
        </div></div></div>
        <div className='row'>
                <button type="button"  className="back"><Link className='link-o'to="/admin"><MdArrowBackIosNew style={{color: '#E8861E', fontSize: '20px'}}/>  Back</Link></button>
                <button type="button"  className="viewList"><Link className='link-o'to="/admin/ALL">View List  <BsCardList style={{color: '#E8861E', fontSize: '20px'}}/></Link></button>
                </div>
                <tr className='gap'></tr>
      </div>
   
  
        
        </>
    )
}

export default UpdateRestaurant;