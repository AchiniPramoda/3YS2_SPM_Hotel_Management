import React, { Component } from 'react'
import axios from "axios"
import Navbar from "../../Navbar/Navbar"
import RoomSmallView from './RoomSmallerView';
import Footer from "../../Footer/Footer"

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

         <div>
                <Navbar/>
            <div className="container mt-5">
                      <div>
                            <h3 className={"text-warning text-center mb-12"}>All Room Details</h3><br/>
                     </div>
                   
                     <div className='row'>
                           
                           <React.Fragment>
                              {
                                  this.state.rooms.map(room=> {
                                       return <RoomSmallView room={room} count={4} />
                                 })
                             }
                          </React.Fragment>
                    </div>
            </div>
            <Footer/>
        </div>
            
        );
    }
}

export default AllRoomForUser;