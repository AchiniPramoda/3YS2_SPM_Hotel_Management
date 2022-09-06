import React, { Component } from 'react'
import axios from "axios"

import RestaurantSmallView from './RestaurantSmallView';
import Navbar from '../../../../Navbar/NavbarResUser';

class AllRestaurantsForUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            restaurants: []
        }
    }

    // Get all restaurants from datasbase
    componentDidMount() {
        axios.get("http://localhost:8345/api/restaurants/").then(res => {
            this.setState({ restaurants: res.data });
        }).catch(err => {
            console.log(err);
        });
    }

    render() {
        return (
<div>
<Navbar />
            <div className="container ">
            <div className='gapTitle'></div>
            <h6>Elite Hotel offers grandeur extravagance & and unparalleled dining <br></br> experiences. 
                Serving exotic dishes from around the world, you will be spoilt <br></br> for choice. 
                Always delighted to cater to your individual needs, we will be glad <br></br> to customize 
                our menus to your unique preferences.</h6>
            <div className='gapTitle'></div>
                <div className="row">
                    
                    <React.Fragment>
                        
                        {
                            this.state.restaurants.map(res => {
                                return <RestaurantSmallView restaurant={res} count={5} />
                            })
                        }
                    </React.Fragment>
                </div>
            </div>
           </div> 

        );
    }
}

export default AllRestaurantsForUser;