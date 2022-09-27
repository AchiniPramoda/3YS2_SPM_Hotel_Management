


import React, { Component } from 'react'
import axios from "axios"

import RoomSmallView from '../Hall_Rooms_Management/Room/RoomSmallerView'
import HallSmaillView from '../Hall_Rooms_Management/Hall/HallView/SmallClientHallView'

class AllRoomForUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
        
            halls: []
        }
    }

   
//get all hall details

componentDidMount() {
    axios.get("http://localhost:8345/hall/get").then(res => {
        this.setState({ halls: res.data });
    }).catch(err => {
        console.log(err);
    });
}

    render() {
        return (

        
            <div className="container mt-5">
                      <div>
                            <h3 className={"text-warning text-center mb-12"}>All Hall Details</h3><br/>
                     </div>
                   
                     <div className='row'>
                           
                           <React.Fragment>
                              {
                                  this.state.halls.map(hall=> {
                                       return <HallSmaillView hall ={hall} count={4} />
                                 })
                             }
                          </React.Fragment>
                    </div>
            </div>
      
            
        );
    }
}

export default AllRoomForUser;