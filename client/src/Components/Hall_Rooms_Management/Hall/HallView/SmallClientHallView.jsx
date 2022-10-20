import React from 'react'
import { useNavigate } from "react-router-dom";

const HallSmallView = (props) => {

    const hall = props.hall;
    const count = props.count;

    const history = useNavigate();
    const handleClick = (path) => {
        window.location.href = path;
    }


    return (

        <div className={`col-xs-12 col-sm-6 col-md-${count}`}>
            
             <div class="card p-0">
               
                <img src={hall.hallImage} class="card-img-top" alt={hall.hallType} />
                  <div class="card-body">
                    
                     <h5 class="card-text  mt-6 mb-6">Hall Name: {hall.name}</h5>
                    
                     <h5 class="card-text  mt-6 mb-6">Total Guests: {hall.Guest}</h5>
                    
                     <p class="card-text">{hall.description}</p>
                   
                     <h4 class="card-text text-end text-danger mt-3 mb-3">RS: {hall.price}/-</h4>
                   
                   
                    <div class="card-footer">
                        <div class="row text-center">
                            <div className="col-6">
                                <button onClick={() => handleClick(`/viewmorehall/${hall._id}`)} type="button" class="btn btn-outline-warning">View</button>
                            </div>
                            <div className="col-6">
                                <button onClick={() => handleClick(`/viewmorehall/${hall._id}`)} type="button" class="btn btn-outline-dark">Rent</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
        </div>
       
    );
}

export default HallSmallView;