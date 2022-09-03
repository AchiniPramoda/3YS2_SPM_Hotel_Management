import React, { Component } from 'react'
import axios from "axios"

import RestaurantSmallView from './RestaurantSmallView';

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

            <div className="container mt-5">
                <div className="row">
                    <h3 className={"text-secondary text-center mb-5"}>All Restaurants</h3>
                    <React.Fragment>
                        {
                            this.state.restaurants.map(res => {
                                return <RestaurantSmallView restaurant={res} count={4} />
                            })
                        }
                    </React.Fragment>
                </div>
            </div>

        );
    }
}

export default AllRestaurantsForUser;