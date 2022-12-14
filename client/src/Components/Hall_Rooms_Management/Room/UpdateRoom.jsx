import React from "react";
import axios from "axios";
import './room.css';
import  {Alert} from '../alert/message.jsx';
import RoomValidation from '../validation/RoomValidation.jsx';



export default class UpdateRoom extends React.Component{

    constructor(props) {
        super(props);

        this.state = {            
            RoomId : "",
            roomType : "",
            beads : "",
            clients : "",
            price : "",
            description : "",
            facilities : "",
            RoomImage :null,
            fileName:"Insert File",
            message:"",
            type:"",
            open:true
        }
    }

    

    componentDidMount() {
        

        axios.get(`http://localhost:8345/room/getroom/${this.props.match.params.id}`).then(res => {


            let room = res.data;

                this.setState({
                    RoomId : room.RoomId,
                    roomType : room.roomType,
                    beads : room.beads,
                    clients : room.clients,
                    price : room.price,
                    description : room.description,
                    facilities : room.facilities,
                    RoomImage :room.RoomImage,
                    fileName:room.RoomImage,
                    message:"",
                    type:"",
                    open:true

                
                });
            }).catch(err => {
                console.log(err);
            });

       
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
            RoomImage:e.target.files[0],
            fileName:e.target.files[0].name,
           
        })
    }    
    



    onSubmit =  (e) => {
        e.preventDefault();

        const result = RoomValidation({
            RoomId: this.state.RoomId,
            roomType: this.state.roomType,
            beads: this.state.beads,
            clients: this.state.clients,
            price: this.state.price,
            description: this.state.description,
            facilities: this.state.facilities,
            
        });
       
     if(result.status){
        const formData = new FormData();
        formData.append('RooId', this.state.RooId);
        formData.append('roomType', this.state.roomType);
        formData.append('beads', this.state.beads);
        formData.append('clients', this.state.clients);
        formData.append('price', this.state.price);
        formData.append('description', this.state.description);
        formData.append('facilities', this.state.facilities);
        formData.append('RoomImage', this.state.RoomImage);
        formData.append("fileName", this.state.fileName);

      axios.put(`http://localhost:8345/room/editroom/${this.state.id}`, formData)
     
        
         
        .then((res) => {
          console.log("room added");
            Alert( "success", "Room Added Successfully");
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

            <div >
                <section class="Staff-form dark">
                    
                  <div class="container">
                    <form >
                     
                      {/* use for title */}
                        <div class="products">
            
                           <div class="title">UPADATE ROOM DETAILS</div>
                      
                       </div>
                       {/* <div className="col-md-7">
                            <img src={this.state.RoomImage? this.state.RoomImage.preview : dummy_image} className="img-fluid rounded-start" alt="..." />
                        </div> */}
            
            
                      <div class="card-details">
            
                       
                        <div class="row">    
                         
                            {/* For Input fields that wants column  */}
                        
                          <div class="form-group col-sm-6">
                            <label for="card-holder">Room ID</label>
                 
                              <input 
                                 
                                 type="text"
                                 class="form-control " 
                                 placeholder="Room ID" 
                                 aria-label="Room ID" 
                                 aria-describedby="basic-addon1" 
                                 id="RooId"
                                 value={this.state.RooId}
                                 onChange={(e) => this.onChange(e)}
                                 />
                          </div>
            
                          
                            <div class="form-group col-sm-6">
                            <label for="card-holder">Room Type</label>

                                <input
                                    type="text"
                                    class="form-control "
                                    placeholder="Room Type"
                                    aria-label="Room Type"
                                    aria-describedby="basic-addon1"
                                    id="roomType"
                                    value={this.state.roomType}
                                    onChange={(e) => this.onChange(e)}
                                    />
                            </div>

                            <div class="form-group col-sm-6">
                            <label for="card-holder">Beads</label>

                                <input
                                    type="number"
                                    class="form-control "
                                    placeholder="Beads"
                                    aria-label="Beads"
                                    aria-describedby="basic-addon1"
                                     id="beads"
                                     value={this.state.beads}
                                    onChange={(e) => this.onChange(e)}
                                    />
                            </div>
                            <div class="form-group col-sm-6">
                            <label for="card-holder">Clients</label>

                                <input
                                    type="number"
                                    class="form-control "
                                    placeholder="Clients"
                                    aria-label="Clients"
                                    aria-describedby="basic-addon1"
                                    id="clients"
                                    value={this.state.clients}
                                    onChange={(e) => this.onChange(e)}
                                    />
                            </div>
                            <div class="form-group col-sm-6">
                            <label for="card-holder">Price</label>

                                <input
                                    type="number"
                                    class="form-control "
                                    placeholder="Price"
                                    aria-label="Price"
                                    aria-describedby="basic-addon1"
                                    id="price"
                                    value={this.state.price}
                                    onChange={(e) => this.onChange(e)}
                                    />
                            </div>
                            <div class="form-group col-sm-12">
                            <label for="card-holder">Description</label>
                            <textarea class="form-control "
                                    placeholder="Description"
                                    aria-label="Description"
                                    value={this.state.description}
                                    id="description"
                                    onChange={(e) => this.onChange(e)}  
                                    />
                            </div>
                            <div class="form-group col-sm-12">
                            <label for="card-holder">Facilities</label>

                                <input
                                    type="textarea"
                                    class="form-control "
                                    placeholder="Facilities"
                                    aria-label="Facilities"
                                    aria-describedby="basic-addon1"
                                    id="facilities"
                                    value={this.state.facilities}
                                    onChange={(e) => this.onChange(e)}
                                    />
                            </div>
                            <div class="form-group col-sm-6">
                            <label for="card-holder">Room Image</label>
                             <input type="file" class="form-control" name="RoomImage"value={this.state.RoomImage} onChange={(e) => this.onFileChange(e)}      />
                            </div>
                           <div class="btngroup col-sm-3">
                            <button type="button" class="cancel">Clear</button>
                          </div>
            
                         
                          <div class="btngroup col-sm-3">
                            <button type="button" class="submit" onClick={(e) => this.onSubmit(e)} >Submit</button>
                          </div>

            
                        </div>
                     
                      </div>
                    </form>
                  </div>
                </section>
              </div>
            
            
                    </div>
                    )
    }
}


