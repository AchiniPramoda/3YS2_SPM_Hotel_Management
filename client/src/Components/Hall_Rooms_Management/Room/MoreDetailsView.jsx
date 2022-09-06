import React, { Component } from 'react';
import axios from 'axios';

class ViewMoreVehicle extends Component {
    constructor(props) {
        super(props);
        this.state = {
        
            room: null
        }
        
    }


    // Get all vehicle by id
    componentDidMount() {
        axios.get(`http://localhost:8345/room/getroom/`).then(res => {
            this.setState({ room:res.data });
            console.log(res.data);
        }).catch(err => {
            console.log(err);
        });
    }


    render() {
        return (
            <div className="container mt-5">
                {
                    this.state.room ? <div class="card mb-3">
                        <div class="row g-0">
                            <div class="col-md-5">
                               
                                <img src={this.state.room.RoomImage} class="img-fluid rounded-start" alt={this.state.room.roomType}/>
                            </div>
                            <div class="col-md">
                                <div class="card-body px-5">
                                    <h3 class="card-title">{this.state.room.roomType}</h3>
                                    <hr />

                                    <h6 class="text-dark">Room Number</h6>
                                    <h6 class="text-secondary">{this.state.room.RooId}</h6>

                                    <h6 class="text-dark">Number of Sheets</h6>
                                    <h6 class="text-secondary">{this.state.room.beads}</h6>

                                    <h6 class="text-dark">Condition</h6>
                                    <h6 class="text-secondary">{this.state.room.clients}</h6>

                                    <h6 class="text-dark">Description</h6>
                                    <h6 class="text-secondary">{this.state.room.description}</h6>

                                    <h3 class="text-danger text-end">RS: {this.state.room.price} /-</h3>

                                    <div className="row mt-5">
                                        <div className="text-center">
                                            <button type="button" class="btn btn-primary">Rent</button>
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

export default ViewMoreVehicle;