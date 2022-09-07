import React from 'react'
import { useNavigate ,Link } from "react-router-dom";


const RestaurantSmallView = (props) => {

    const single_restaurant = props.restaurant;
    //const count = props.count;

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
                
                                <button className='view' ><Link className="link" to={`/restaurants/${single_restaurant._id}`}>More</Link></button>
                           
                                </div>
                        </div>
                    
            
            <div class="column-33">
            <div className="row">
            <h5 class="title">{single_restaurant.restaurantName}</h5></div>
            <div className="row"> <p class="card-text">{single_restaurant.description}</p></div>
                   </div>
        </div>
        <tr className='gapTitle'></tr>
        </div>
    );
}

export default RestaurantSmallView;