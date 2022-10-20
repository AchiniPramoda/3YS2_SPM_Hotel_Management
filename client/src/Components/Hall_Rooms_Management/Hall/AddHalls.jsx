import React from "react";
import axios from "axios";
import './Hall.css';
import  {Alert} from '../alert/message.jsx';
import HallValidation from '../validation/HallValidation.jsx';
import Navbar from "../../Navbar/AdminNavbar/AdminNavbar";
import Footer from "../../Footer/Footer";

export default class AddHall extends React.Component{

    constructor(props) {
        super(props);
        
        this.state = {            
            name : "",
            hallType : "",
            Space : "",
            Guest : "",
            price : "",
            description : "",
            feacture : "",
            event : "",
            hallImage :null,
            fileName:"Insert File",
            message:"",
            type:"",
            open:true
        }
    }
       // Function for Check Status code
       handleError = (err) => {
        if (err) {
            if (err.response) {
                if (err.response.status === 404) {
                    Alert("error", "Something went wrong!", err.response.data)

                }
            } else {
                Alert("error", "Something went wrong.", err)

            }
        }
    }
    onChange = (e) => {        
        this.setState({[e.target.id]: e.target.value});
        console.log(e.target.value);
    }

    onFileChange = (e) => {
        
        this.setState({
            hallImage:e.target.files[0],
            fileName:e.target.files[0].name,
           
        })
    }



    onSubmit =  (e) => {
        e.preventDefault();

        const result = HallValidation({
            hallID : this.state.hallID,
            name: this.state.name,
            Space: this.state.Space,
            Guest: this.state.Guest,
            hallType: this.state.hallType,
            price: this.state.price,
            description: this.state.description,
            feacture: this.state.feacture,
            event: this.state.event,
            
        });

       
     if(result.status){
        const formData = new FormData();
        formData.append('hallID', this.state.hallID);
        formData.append('name', this.state.name);
        formData.append('Space', this.state.Space);
        formData.append('Guest', this.state.Guest);
        formData.append('hallType', this.state.hallType);
        formData.append('price', this.state.price);
        formData.append('description', this.state.description);
        formData.append('feacture', this.state.feacture);
        formData.append('event', this.state.event);
        formData.append('hallImage', this.state.hallImage);
        formData.append("fileName", this.state.fileName);

      axios.post("http://localhost:8345/hall/add", formData)
     
        
         
        .then((res) => {
          console.log("Hall added");
            Alert( "success", "Hall Added Successfully");
            console.log(res.data);                                                                
        }).catch(err => {
            this.handleError(err);
            console.log(err);
        })
        }else{
            Alert("error", "Form Validation Error!", result.error)

        }
    }
    render(){

        return (
            <div>
<Navbar/>
            <div >
                <section class="Hall-form dark">
                    
                  <div class="container">

                    <form >
                     
               
                           <div class="products">
                               <div class="title">ADD Hall DETAILS</div>
                            </div>
                      
            
            
                      <div class="card-details">
                       
                        <div class="row">    

                        
                        <div class="form-group col-sm-6">
                               <label for="card-holder">Hall  ID</label>
                 
                                     <input 
                                         type="text"
                                         class="form-control ml-1" 
                                         placeholder="Hall ID" 
                                         aria-label="Hall ID" 
                                         aria-describedby="basic-addon1" 
                                         id="hallID"
                                         onChange={(e) => this.onChange(e)}
                                     />
                          </div>
  
                          <div class="form-group col-sm-6">
                               <label for="card-holder">Hall Name</label>
                 
                                     <input 
                                         type="text"
                                         class="form-control ml-1" 
                                         placeholder="Hall Name" 
                                         aria-label="Hall Name" 
                                         aria-describedby="basic-addon1" 
                                         id="name"
                                         onChange={(e) => this.onChange(e)}
                                     />
                          </div>
            
                          
                            <div class="form-group col-sm-6">

                                <label for="card-holder">Hall Type</label>

                                     <input
                                         type="text"
                                         class="form-control ml-1"
                                         placeholder="Hall Type"
                                         aria-label="Hall Type"
                                         aria-describedby="basic-addon1"
                                         id="hallType"
                                         onChange={(e) => this.onChange(e)}
                                    />
                            </div>

                            <div class="form-group col-sm-6">

                                 <label for="card-holder">Available Space</label>

                                      <input
                                          type="number"
                                          class="form-control ml-1"
                                          placeholder="Available Space"
                                          aria-label="Available Space"
                                          aria-describedby="basic-addon1"
                                          id="Space"
                                          onChange={(e) => this.onChange(e)}
                                      />
                            </div>

                            <div class="form-group col-sm-6">

                                     <label for="card-holder">No Of Guests</label>

                                        <input
                                           type="number"
                                           class="form-control ml-1"
                                           placeholder="No Of Guests<"
                                           aria-label="No Of Guests<"                                  
                                           aria-describedby="basic-addon1"
                                           id="Guest"
                                           onChange={(e) => this.onChange(e)}
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
                                          id="price"
                                          onChange={(e) => this.onChange(e)}
                                        />
                            </div>
                           
                            <div class="form-group col-sm-12">

                                 <label for="card-holder">Description</label>

                                       <textarea 
                                          class="form-control ml-1"
                                          placeholder="Description"
                                          aria-label="Description"
                                          aria-describedby="basic-addon1"
                                          id="description"
                                          onChange={(e) => this.onChange(e)}  
                                          />
                            </div>

                            <div class="form-group col-sm-12">

                                 <label for="card-holder">Feacture</label>

                                       <input
                                          type="text"
                                          class="form-control ml-1"
                                          placeholder="Feacture"
                                          aria-label="Feacture"
                                          aria-describedby="basic-addon1"
                                          id="feacture"
                                          onChange={(e) => this.onChange(e)}
                                    />
                            </div>

                            <div class="form-group col-sm-12">

                                    <label for="card-holder">Event</label>

                                       <input
                                          type="text"
                                          class="form-control ml-1"
                                          placeholder="Event"
                                          aria-label="Event"
                                          aria-describedby="basic-addon1"
                                          id="event"
                                          onChange={(e) => this.onChange(e)}
                                          />
                            </div>

                            <div class="form-group col-sm-12">

                                    <label for="card-holder">Hall Image</label>
                                       <input 
                                          type="file" 
                                          class="form-control ml-1" 
                                          name="hallImage" 
                                          onChange={(e) => this.onFileChange(e)}    
                                        />
                            </div>
                        


                          
                           <div class="btngroup ml-6 col-sm-4">
                            <button type="button" class="cancel">Clear</button>
                          </div>
            
                         
                          <div class="btngroup ml-2 col-sm-4">
                            <button type="button" class="submit" onClick={(e) => this.onSubmit(e)} >Submit</button>
                          </div>

            
                        </div>
                     
                      </div>
                    </form>
                  </div>
                </section>
              </div>
             <Footer />
            
                    </div>
                    )
    }
}


