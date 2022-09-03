import React, { Component } from 'react';
import axios from "axios"
import ReactToPrint from 'react-to-print';
import './RoomView.css';
import Navbar from '../../Navbar/Navbar';
import RoomActions from './RoomAction';

class AllRoomContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rooms: [],
            filterdRooms: [],
            isGen: false
        }
    }

    updateContent = () => {
        axios.get("http://localhost:8345/room/getroom").then(res => {
            this.setState({
                rooms: res.data,
                filterdRooms: res.data,
            });
        }).catch(err => {
            console.log(err);
        });
    }

    // Get all packages from datasbase
    componentDidMount() {
        this.updateContent();
    }

    // Function for search vehicles
    search = (e) => {
        let searchTag = e.target.value.toLowerCase();
        let filterdRooms= [];

        this.state.rooms.forEach(room => {
            if (room.RooId.toLowerCase().includes(searchTag) || room.roomType.toLowerCase().includes(searchTag)) {
                filterdRooms.push(room)
            }
        })

        this.setState({
            filterdRooms,
            searchTag
        });

    }

    getRedirectButton = () => {
        return <button type="button" onClick={() => { window.location='/addroom' }} class="btn btn-outline-primary m-2">Create Room</button>
    }


    render() {
        return (
<div>

    <Navbar />


<div className="myyy">
            <div className="container-fluid mt-5">
            <div className='row'>
                    <nav class="navbar navbar-light bg-light">
                        <div class="container-fluid">
                            <div class="d-flex">
                                <input onChange={(e) => this.search(e)} class="form-control me-2 form-group" type="search" placeholder="Search" aria-label="Search" />
                                <button class="btn btn-outline-warning form-group" type="submit">Search</button>
                            </div>
                        </div>
                    </nav>
                    </div>
                    {
                        this.state.isGen ? <div className="row text-end">
                            <div className="col">
                                {this.getRedirectButton()}
                                <ReactToPrint

                                    documentTitle={"All Room"}
                                    onAfterPrint={() => { this.setState({ isGen: false }); }}
                                    trigger={() => {
                                        return <button type="button" class="btn btn-primary">Generate PDF Now</button>
                                    }}
                                    content={() => this.componentRef}
                                />
                                <button onClick={() => { this.setState({ isGen: false }); }} type="button" class="btn btn-danger m-2">Cancel</button>
                            </div>
                        </div> : <div className="row text-end">
                            <div className="col">
                                {this.getRedirectButton()}
                                <button type="button" onClick={() => { this.setState({ isGen: true }); }} class="btn btn-outline-secondary">Genrate Report</button>
                            </div>
                        </div>
                    }

                    <div ref={el => (this.componentRef = el)}>
                        <h3 className={"text-secondary text-center mb-5"}>All Room details</h3>
                        <div class="table1">
                            <table class="table">
                                <thead className={"table-dark"}>
                                    <tr>
                                        <th scope="col">Room Id</th>
                                        <th scope="col">Room Type</th>
                                        <th scope="col">Beds</th>
                                        <th scope="col">Clients</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Description</th>
                                        {
                                            !this.state.isGen ? <th scope="col">Actions</th> : <React.Fragment />
                                        }
                                    </tr>
                                </thead>
                                <tbody>
                                    <React.Fragment>
                                        {
                                            this.state.filterdRooms.map(room => {
                                                return <RoomActions key={room._id} room={room} isGen={this.state.isGen} updateContent={this.updateContent} />
                                            })
                                        }
                                    </React.Fragment>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
           
            </div>
            </div>
        );
    }
}

export default  (AllRoomContainer);