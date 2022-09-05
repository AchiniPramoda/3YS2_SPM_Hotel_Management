import React from 'react'
import { useNavigate } from "react-router-dom";


const RestaurantSmallView = (props) => {

    const single_restaurant = props.restaurant;
    const count = props.count;

    const history = useNavigate();
    const handleClick = (path) => {
        history.push(path);
    }

    return (
<div>
        <div className="row">
            
            <div class="column-66">
            <div class="card1">
                <img src={single_restaurant.imageURL} class="card-img-top" alt={single_restaurant.restaurantName} />
                
                                <button className='view' onClick={() => handleClick(`/restaurants/${single_restaurant._id}`)} type="button" >More</button>
                           
                                </div>
                        </div>
                    
            
            <div class="column-33">
            <div className="row">
            <h5 class="title">{single_restaurant.restaurantName}</h5></div>
            <div className="row"> <p class="card-text">{single_restaurant.description}</p></div>
                   </div>
        </div>
        <tr className='gap'></tr>
        </div>
    );
}

export default RestaurantSmallView;