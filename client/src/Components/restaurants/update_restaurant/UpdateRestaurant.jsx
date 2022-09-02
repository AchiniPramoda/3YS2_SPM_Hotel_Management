import React, { Component } from 'react'

import { withRouter } from "react-router-dom";

import axios from "axios"
import { Alert } from '../../../services/Alert'
import restaurantValidations from "../../../validations/RestaurantValidations"
import dummy_image from "../../../assets/images/dummy_image.jpg"

class UpdateRestaurant extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null,
            docId: "",
            name: "",
            //id: "",
            other: "",
            description: "",
            //description: "",
            isUpdated: false
        }
    }

    // Get all Restaurant by id
    componentDidMount() {

        axios.get(`http://localhost:8080/api/restaurants/${this.props.match.params.id}`).then(res => {
            let p = res.data
            this.setState({
                docId: p._id,
                image: {
                    preview: p.imageURL,
                    raw: null,
                },
                name: p.restaurantName,
                id: p.restaurantId,
                other: p.other,
                description: p.description,
                //description: p.description,
            });
            console.log(res.data);
        }).catch(err => {
            console.log(err);
        });
    }

    // Handle input feild
    onInputValueChange = (e) => {
        this.setState({ [e.target.id]: e.target.value });
    }

    // function to handle image
    handleChangeFile = (e) => {
        if (e.target.files.length) {
            const img = {
                preview: URL.createObjectURL(e.target.files[0]),
                raw: e.target.files[0],
            };
            this.setState({
                image: img,
                isUpdated: true
            });
        }
    };


    // Function for create Restaurant
    submit = (e) => {

        e.preventDefault();

        const result = restaurantValidations({
            name: this.state.name,
            description: this.state.description,
            other: this.state.other,
            //description: this.state.description,
        });

        if (result.status) {
            if (this.state.image) {
                const formData = new FormData();
                formData.append("photo", this.state.image.raw);
                formData.set("restaurantName", this.state.name);
                //formData.set("restaurantId", this.state.id);
                formData.set("description", this.state.description);
                formData.set("other", this.state.other);
                //formData.set("description", this.state.description);
                formData.set("isImageUpdated", this.state.isUpdated);

                console.log("formData", this.state);

                axios.put(`http://localhost:8080/api/restaurants/UpdateRestaurant/${this.state.docId}`, formData).then(res => {
                    Alert("success", "Done!", "Restaurant Updated Successfully.");
                    this.props.history.push("/admin/restaurants")

                }).catch(err => {
                    Alert("error", "Something went wrong.", err)
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
            <div className="container">
                <div className="card mb-3 mt-5">
                    <div className="row g-0">
                        <div className="col-md-7">
                            <img src={this.state.image ? this.state.image.preview : dummy_image} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-5 p-3">
                            <div className="card-body">
                                <h4 className="card-title text-secondary mt-3">Update Restaurant</h4>
                                <hr classNameName="mb-3" />
                                <form onSubmit={(e) => this.submit(e)}>
                                    <div className="mb-3">
                                        <label for="name" className="form-label">Restaurant Name</label>
                                        <input
                                            className="form-control"
                                            id="name"
                                            value={this.state.name}
                                            onChange={(e) => this.onInputValueChange(e)}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label for="other" className="form-label">Restaurant other</label>
                                        <input
                                            className="form-control"
                                            id="other"
                                            type="string"
                                            value={this.state.other}
                                            onChange={(e) => this.onInputValueChange(e)}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label for="description" className="form-label">Restaurant description</label>
                                        <input
                                            className="form-control"
                                            id="description"
                                            type="string"
                                            value={this.state.description}
                                            onChange={(e) => this.onInputValueChange(e)}
                                        />
                                    </div>
                                    
                                    <div className="mb-4">
                                        <div className="mb-3">
                                            <label for="formFile" className="form-label">Restaurant Image</label>
                                            <input
                                                accept="image/*"
                                                className="form-control"
                                                type="file"
                                                id="formFile"
                                                onChange={(e) => this.handleChangeFile(e)}
                                            />
                                        </div>
                                    </div>
                                    <div className="d-grid gap-2 mx-auto">
                                        <button type="submit" className="btn btn-success">Update Restaurant</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(UpdateRestaurant);