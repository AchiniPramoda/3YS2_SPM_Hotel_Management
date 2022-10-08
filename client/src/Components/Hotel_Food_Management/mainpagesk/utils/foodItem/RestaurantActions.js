import React from 'react';
import { useNavigate ,Link} from "react-router-dom";

import Swal from "sweetalert2";
import axios from 'axios';
import '../../../../../../src/index.css';
import { MdEdit ,MdDelete} from "react-icons/md";

const RestaurantActions = (props) => {


    const history = useNavigate();
    const data = props.restaurant;

    // Function for redirect
    const handleClick = (path) => {
        history.push(path);
    }

    // Function for delete restaurant
    const deleteRestaurant = () => {
        Swal.fire({
            title: 'Attention !',
            text: "Are you sure ,You want to delete this record",
            
            showCancelButton: true,
            confirmButtonColor: '#126910',
            cancelButtonColor: '#F14668',
            confirmButtonText: 'Yes',
            cancelButtonText: 'No'

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
            <td>{data.description}</td>
            <td>{data.other}</td>
           
            <td><img className="resturantImage" src={data.imageURL}></img></td>
            {
                !props.isGen ? <td>
                    <button  className="actions" type="button"  ><Link to={`/admin/restaurants/EditRestaurant/${data._id}`}><MdEdit style={{color: '#126910', fontSize: '20px'}}/></Link></button>
                    <button onClick={deleteRestaurant} type="button" className="actions" ><MdDelete style={{color: '#F07D7D', fontSize: '20px'}}/></button>
                </td> : <React.Fragment />
            }
        </tr>
    </React.Fragment>);
}

export default RestaurantActions;