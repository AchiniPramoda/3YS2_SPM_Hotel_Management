import React, { Component } from 'react'
import axios from "axios"

import RoomSmallView from './RoomSmallerView'

class AllRoomForUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rooms: []
        }
    }

    // Get all packages from datasbase
    componentDidMount() {
        axios.get("http://localhost:8345/room/getroom").then(res => {
            this.setState({ rooms: res.data });
        }).catch(err => {
            console.log(err);
        });
    }

    render() {
        return (

            <div className="container mt-5">
                <div className="row">
                    <h3 className={"text-secondary text-center mb-12"}>All Room Details</h3><br/>
                    <br/>
                    <br/>
                    <br/>
                    <React.Fragment>
                        {
                            this.state.rooms.map(room=> {
                                return <RoomSmallView room={room} count={4} />
                            })
                        }
                    </React.Fragment>
                </div>
            </div>

        );
    }
}

export default AllRoomForUser;