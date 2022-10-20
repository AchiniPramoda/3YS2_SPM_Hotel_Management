import React, { useState } from 'react';
import axios from 'axios';
import { useParams ,Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from '../../Navbar/NavbarResUser';
import '../../../../src/index.css';
import Footer from '../../Hotel_Food_Management/headersk/Footer'
function ViewMoreRestaurant () {

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

       

         
     
   
        return (
            <>


            <div >
            <Navbar />
            <div className="containerUser">
                {
                    
                        <div class="row">
                            <div class="ccolumn-66">
                                <img src={imageURL} class="img-fluid rounded-start" alt="..." />
                            </div>
                            <div class="row">
                                
                                    <h4 className="titleView">{restaurantName}</h4>
                        
                                    <p class="titleView">{description}</p>
                    
                                    <p class="titleView"> {other} </p>
                                    
                                        
                                            <button type="button" className="viewRes"><Link className="link" to='/customer'>View Menu</Link></button>
                                        <br></br>
                                   

                                </div>
                            </div>
                       
                   
                }
            </div>
            <Footer/>
            </div>
   
  
        
        </>
        );
    }


export default ViewMoreRestaurant;