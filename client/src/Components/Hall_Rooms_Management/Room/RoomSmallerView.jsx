import React from 'react'
import { useNavigate } from "react-router-dom";

const RoomSmallView = (props) => {

    const room = props.room;
    const count = props.count;

    const history = useNavigate();
    const handleClick = (path) => {
        history.push(path);
    }

    return (

        <div className={`col-xs-12 col-sm-6 col-md-${count}`}>
            <div class="card">
                <img src={room.RoomImage} class="card-img-top" alt={room.roomType} />
                <div class="card-body">
                    <h5 class="card-title text-center">{room.beads}</h5>
                    <h6 class="card-title">No Of Client Count: {room.clients}</h6>
                    <p class="card-text">{room.description}</p>
                    <h4 class="card-text text-end text-danger mt-3 mb-3">RS: {room.price}/-</h4>
                    <div class="card-footer">
                        <div class="row text-center">
                            <div className="col-6">
                                <button onClick={() => handleClick(`/vehicles/${room._id}`)} type="button" class="btn btn-outline-primary">View</button>
                            </div>
                            <div className="col-6">
                                <button onClick={() => handleClick(`/vehicles/${room._id}`)} type="button" class="btn btn-outline-success">Rent</button>
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