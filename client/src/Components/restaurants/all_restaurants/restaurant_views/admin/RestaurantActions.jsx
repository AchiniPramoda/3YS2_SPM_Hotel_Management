import React from 'react';
import { useNavigate } from "react-router-dom";

import Swal from "sweetalert2";
import axios from 'axios';
import '../../../../../../src/index.css';

const RestaurantActions = (props) => {


    const navigate = useNavigate();
    const data = props.restaurant;

    // Function for redirect
    const handleClick = (path) => {
        navigate.push(path);
    }

    // Function for delete restaurant
    const deleteRestaurant = () => {
        Swal.fire({
            title: 'Are you want to delete restaurant',
            text: "Note that ths process can not be revert.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Delete'
        }).then((result) => {

            if (result.isConfirmed) {
                axios.delete(`http://localhost:8345/api/restaurants/DeleteRestaurant/${data._id}`)
                    .then(res => {
                        Swal.fire(
                            'Done!',
                            'Restaurant deleted successfully!',
                            'success'
                        )
                        props.updateContent();
                    }).catch(err => {
                        console.log(err)
                    })
            }
        })
    }


    return (<React.Fragment>
        <tr>
            <td>{data.restaurantName}</td>
            <td>{data.other}</td>
            <td>{data.description}</td>
            <td><img className="resturantImage" src={data.imageURL}></img></td>
            {
                !props.isGen ? <td>
                    <button onClick={() => handleClick(`/admin/restaurants/EditRestaurant/${data._id}`)} type="button" class="btn btn-success m-">Update</button>
                    <button onClick={deleteRestaurant} type="button" class="btn btn-danger m-1">Delete</button>
                </td> : <React.Fragment />
            }
        </tr>
    </React.Fragment>);
}

export default RestaurantActions;