import React from 'react'
import { useHistory } from "react-router-dom";

const RestaurantSmallView = (props) => {

    const single_restaurant = props.restaurant;
    const count = props.count;

    const history = useHistory();
    const handleClick = (path) => {
        history.push(path);
    }

    return (

        <div className={`col-xs-12 col-sm-6 col-md-${count}`}>
            <div class="card">
                <img src={single_restaurant.imageURL} class="card-img-top" alt={single_restaurant.restaurantName} />
                <div class="card-body">
                    <h5 class="card-title text-center">{single_restaurant.restaurantName}</h5>
                    <p class="card-text">{single_restaurant.description}</p>
                    <h4 class="card-text text-end text-danger mt-3 mb-3"> {single_restaurant.other}/-</h4>
                    <div class="card-footer">
                        <div class="row text-center">
                            <div className="col-6">
                                <button onClick={() => handleClick(`/restaurants/${single_restaurant._id}`)} type="button" class="btn btn-outline-primary">View</button>
                            </div>
                            <div className="col-6">
                                <button onClick={() => handleClick(`/restaurants/${single_restaurant._id}`)} type="button" class="btn btn-outline-success">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RestaurantSmallView;