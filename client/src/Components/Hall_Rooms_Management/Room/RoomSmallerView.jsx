import React from 'react'
import { useNavigate } from "react-router-dom";

const RoomSmallView = (props) => {

    const room = props.room;
    const count = props.count;

    const history = useNavigate();
    const handleClick = (path) => {
        window.location.href = path;
    }

    return (

        <div className={`col-xs-12 col-sm-6 col-md-${count}`}>
            
             <div class="card p-0">
               
                <img src={room.RoomImage} class="card-img-top" alt={room.roomType} />


                  <div class="card-body">
                    <div className='halls'>
                     <h5 class="card-text  mt-6 mb-6">Beds: {room.beads}</h5>
                    
                     <h5 class="card-text">Total Guests: {room.clients}</h5>
                    
                     <p class="card-text">{room.description}</p>
                   
                     <h4 class="card-text text-justify text-end text-danger mt-3 mb-3">RS: {room.price}/-</h4>
                     </div>
                   
                    <div class="card-footer">
                        <div class="row text-center">
                            <div className="col-6">
                                <button onClick={() => handleClick(`/viewmore/${room._id}`)} type="button" class="btn btn-outline-warning">View</button>
                            </div>
                            <div className="col-6">
                                <button onClick={() => handleClick(`/viewmore/${room._id}`)} type="button" class="btn btn-outline-dark">Rent</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
        </div>
       
    );
}

export default RoomSmallView;