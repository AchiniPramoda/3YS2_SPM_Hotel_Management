import React, { Component } from 'react';
import axios from 'axios';

class ViewMoreRestaurant extends Component {
    constructor(props) {
        super(props);
        this.state = {
            restaurant: null
        }
    }


    // Get all Restaurant by id
    componentDidMount() {
        axios.get(`http://localhost:8080/api/restaurants/${this.props.match.params.id}`).then(res => {
            this.setState({ restaurant: res.data });
            console.log(res.data);
        }).catch(err => {
            console.log(err);
        });
    }


    render() {
        return (
            <div className="container mt-5">
                {
                    this.state.restaurant ? <div class="card mb-3">
                        <div class="row g-0">
                            <div class="col-md-5">
                                <img src={this.state.restaurant.imageURL} class="img-fluid rounded-start" alt="..." />
                            </div>
                            <div class="col-md-7">
                                <div class="card-body px-5">
                                    <h3 class="card-title">{this.state.restaurant.restaurantName}</h3>
                                    <hr />
                                    <p class="card-text">{this.state.restaurant.description}</p>
                                    <h4 class="text-primary text-end">description: {this.state.restaurant.description}%</h4>
                                    <h3 class="text-danger text-end"> {this.state.restaurant.other} /-</h3>
                                    <div className="row mt-5">
                                        <div className="text-center">
                                            <button type="button" class="btn btn-primary">Buy Now</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div> : <React.Fragment />
                }
            </div>
        );
    }
}

export default ViewMoreRestaurant;