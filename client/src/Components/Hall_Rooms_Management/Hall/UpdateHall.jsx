import React from "react";
import axios from "axios";
import './Hall.css';
import  {Alert} from '../alert/message.jsx';
import HallValidations from '../validation/HallValidation.jsx';


export default class UpdateHall extends React.Component{

    constructor(props) {
        super(props);

        this.state = {     
            hallID:"",       
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

    

    componentDidMount() {
        
 

        axios.get(`http://localhost:8345/hall/gethall/${this.props.match.params.id}`).then(res => {


            let hall = res.data;

                this.setState({
                    hallID : hall.hallID,
                    name : hall.name,
                    hallType : hall.hallType,
                    Space : hall.Space,
                    Guest : hall.Guest,
                    price : hall.price,
                    description : hall.description,
                    feacture : hall.feacture,
                    event :hall.event,
                    hallImage : hall.hallImage,
                    fileName:hall.hallImage,
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
            hallImage :e.target.files[0],
            fileName:e.target.files[0].name,
           
        })
    }    
    



    onSubmit =  (e) => {
        e.preventDefault();

        const result = HallValidations({
            hallID: this.state.hallID,
            name: this.state.name,
            hallType: this.state.hallType,
            Space: this.state.Space,
            Guest: this.state.Guest,
            price: this.state.price,
            description: this.state.description,
            feacture: this.state.feacture,
            event: this.state.event,
            
        });
       
     if(result.status){
        const formData = new FormData();
        formData.append('hallID', this.state.hallID);
        formData.append('name', this.state.name);
        formData.append('hallType', this.state.hallType);
        formData.append('Space', this.state.Space);
        formData.append('Guest', this.state.Guest);
        formData.append('price', this.state.price);
        formData.append('description', this.state.description);
        formData.append('feacture', this.state.feacture);
        formData.append('event', this.state.event);
        formData.append('hallImage', this.state.hallImage);
        formData.append("fileName", this.state.fileName);

      axios.put(`http://localhost:8345/hall/edit/${this.state.id}`, formData)
     
        
         
        .then((res) => {
          console.log("hall added");
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

            <div >
                <section class="Staff-form dark">
                    
                  <div class="container">
                    <form >
                     
                      {/* use for title */}
                        <div class="products">
            
                           <div class="title">UPADATE Hall DETAILS</div>
                      
                       </div>
                     
            
                      <div class="card-details">
            
                       
                        <div class="row">    
                         
                            {/* For Input fields that wants column  */}
                        
                          <div class="form-group col-sm-6">
                            <label for="card-holder">Hall ID</label>
                 
                              <input 
                                 
                                 type="text"
                                 class="form-control " 
                                 placeholder="Hall ID" 
                                 aria-label="Hall ID" 
                                 aria-describedby="basic-addon1" 
                                 id="hallID"
                                 value={this.state.hallID}
                                 onChange={(e) => this.onChange(e)}
                                 />
                          </div>
            
                          
                            <div class="form-group col-sm-6">
                            <label for="card-holder">Hall Type</label>

                                <input
                                    type="text"
                                    class="form-control "
                                    placeholder="Hall Type"
                                    aria-label="Hall Type"
                                    aria-describedby="basic-addon1"
                                    id="hallType"
                                    value={this.state.hallType}
                                    onChange={(e) => this.onChange(e)}
                                    />
                            </div>

                            <div class="form-group col-sm-6">
                            <label for="card-holder">Hall Name</label>

                                <input
                                    type="text"
                                    class="form-control "
                                    placeholder="Hall Type"
                                    aria-label="Hall Type"
                                    aria-describedby="basic-addon1"
                                    id="name"
                                    value={this.state.name}
                                    onChange={(e) => this.onChange(e)}
                                    />
                            </div>

                            <div class="form-group col-sm-6">
                            <label for="card-holder">Space</label>

                                <input
                                    type="number"
                                    class="form-control "
                                    placeholder="Space"
                                    aria-label="Space"
                                    aria-describedby="basic-addon1"
                                     id="Space"
                                     value={this.state.Space}
                                    onChange={(e) => this.onChange(e)}
                                    />
                            </div>
                            <div class="form-group col-sm-6">
                            <label for="card-holder">Guest</label>

                                <input
                                    type="number"
                                    class="form-control "
                                    placeholder="Guest"
                                    aria-label="Guest"
                                    aria-describedby="basic-addon1"
                                    id="Guest"
                                    value={this.state.Guest}
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
                            <label for="card-holder">feacture</label>

                                <input
                                    type="textarea"
                                    class="form-control "
                                    placeholder="feacture"
                                    aria-label="feacture"
                                    aria-describedby="basic-addon1"
                                    id="feacture"
                                    value={this.state.feacture}
                                    onChange={(e) => this.onChange(e)}
                                    />
                            </div>

                            <div class="form-group col-sm-12">
                            <label for="card-holder">Event</label>

                                <input
                                    type="textarea"
                                    class="form-control "
                                    placeholder="Facilities"
                                    aria-label="Facilities"
                                    aria-describedby="basic-addon1"
                                    id="event"
                                    value={this.state.event}
                                    onChange={(e) => this.onChange(e)}
                                    />
                            </div>


                            <div class="form-group col-sm-6">
                            <label for="card-holder">Hall Image</label>
                             <input type="file" class="form-control" name="hallImage" value={this.state.hallImage} onChange={(e) => this.onFileChange(e)}      />
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


