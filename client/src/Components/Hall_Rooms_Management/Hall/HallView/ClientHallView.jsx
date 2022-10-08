import React, { Component } from 'react'
import axios from "axios"
import Navbar from "../../Navbar/hallNavbar"
import HallSmallView from './SmallClientHallView'

class AllhallForUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            halls: []
        }
    }

    // Get all packages from datasbase
    componentDidMount() {
        axios.get("http://localhost:8345/hall/get").then(res => {
            this.setState({ halls: res.data });
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
                            <h3 className={"text-warning text-center mb-12"}>All Hall Details</h3><br/>
                     </div>
                   
                     <div className='row'>
                           
                           <React.Fragment>
                              {
                                  this.state.halls.map(hall=> {
                                       return <HallSmallView hall={hall} count={4} />
                                 })
                             }
                          </React.Fragment>
                    </div>
            </div>
        </div>
            
        );
    }
}

export default AllhallForUser;