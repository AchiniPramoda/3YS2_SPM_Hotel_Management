import React, { Component } from 'react';
import { Link } from "react-router-dom";
//import { withRouter } from "react-router-dom";
import axios from "axios";
import { Alert } from '../../../services/Alert';
import restaurantValidations from '../../../validations/RestaurantValidations';
import dummy_image from "../../../assets/images/dummy_image.jpg";
import '../../../../src/index.css';
import Navbar from '../../Navbar/NavbarResAdmin';
import { MdArrowBackIosNew } from "react-icons/md"
import {BsCardList} from "react-icons/bs"
import Footer from '../../Hotel_Food_Management/headersk/Footer'

class CreateRestaurant extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null,
            name: "",
            other: "",
            description: "",
        }
    }

    // Handle input feild
    onInputValueChange = (e) => {
        this.setState({ [e.target.id]: e.target.value });
    }

    handleChangeFile = (e) => {
        if (e.target.files.length) {
            const img = {
                preview: URL.createObjectURL(e.target.files[0]),
                raw: e.target.files[0],
            };
            this.setState({ image: img });
        }
    };

    handleError = (err) => {
        if (err) {
            if (err.response) {
                if (err.response.status === 404) {
                    Alert("error", "Something went wrong!", err.response.data);
                }
            } else {
                Alert("error", "Something went wrong.", err)

            }
        }
    }


    // Function for create Restaurant
    submit = (e) => {

        e.preventDefault();

        const result = restaurantValidations({
            name: this.state.name,
            //id: this.state.id,
            other: this.state.other,
            description: this.state.description,
        });

        if (result.status) {
            if (this.state.image) {
                const formData = new FormData();
                formData.append("photo", this.state.image.raw);
                formData.set("restaurantName", this.state.name);
                //formData.set("restaurantId", this.state.id);
                formData.set("other", this.state.other);
                formData.set("description", this.state.description);

                console.log("formData", this.state);

                axios.post("http://localhost:8345/api/restaurants/AddRestaurant", formData).then(res => {
                    Alert("success", "Done!", "Restaurant Created Successfully.");
                    this.setState({
                        image: null,
                        name: "",
                        //id: "",
                        description: "",
                        other: "",
                        
                    });
                    //this.props.navigate.push("/admin/restaurants")
                }).catch(err => {
                    this.handleError(err)
                })
            } else {
                Alert("error", "Form Validation Error!", "Please upload image.")
            }

        } else {
            Alert("error", "Form Validation Error!", result.error)
        }

    }

    render() {
        return (
            
            
             
            <div >
   <Navbar />

<div className="container1">
                
                    <div className="row g-0">
                        <div className="cl">
                            <div className="card-body">
                                <h4 className="card-title  mt-3">Add Restuarant</h4>
                                <hr classNameName="mb-3" />
                                <form onSubmit={(e) => this.submit(e)}>

                                <div className="mb-3">
                                        <label for="other" className="form-label">Name Of the Restuarant</label>
                                        <input
                                            className="form-control"
                                            id="name"
                                            type="string"
                                            value={this.state.name}
                                            onChange={(e) => this.onInputValueChange(e)}
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label for="name" className="form-label">Description</label>
                                        <input
                                            className="form-control"
                                            id="description"
                                            type="string"
                                            value={this.state.description}
                                            onChange={(e) => this.onInputValueChange(e)}
                                        />
                                    </div>
                                    
                                    <div className="mb-3">
                                        <label for="other" className="form-label">Other</label>
                                        <input
                                            className="form-control"
                                            id="other"
                                            type="string"
                                            value={this.state.other}
                                            onChange={(e) => this.onInputValueChange(e)}
                                        />
                                    </div>
                                    <label for="other" className="form-label">Image</label>
                                    <tr className='gap'></tr>
                                    <div class="custom-file mb-3">
                                        <input type="file" class="custom-file-input" id="customFile" name="filename" accept="image/*" onChange={(e) => this.handleChangeFile(e)}></input>
                                        <label class="custom-file-label" for="customFile">Add Image here</label>
                                    </div>
                                    <div className="col-md-7">
                                        <img src={this.state.image ? this.state.image.preview : dummy_image} className="resturantImageadd" alt="..." />
                                    </div>
                                    <div className="d-grid gap-2 mx-auto">
                                        <button type="submit" className="submitResturant">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                <button type="button"  className="back"><Link className='link-o'to="/admin"><MdArrowBackIosNew style={{color: '#E8861E', fontSize: '20px'}}/>  Back</Link></button>
                <button type="button"  className="viewList"><Link className='link-o'to="/admin/ALL">View List  <BsCardList style={{color: '#E8861E', fontSize: '20px'}}/></Link></button>
                </div>
                <tr className='gap'></tr>
                <Footer/>
                </div>
            
        );
    }
}

export default CreateRestaurant;