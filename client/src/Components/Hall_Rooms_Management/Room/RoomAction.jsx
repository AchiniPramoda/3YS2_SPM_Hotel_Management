import React from 'react';
import { useNavigate  } from "react-router-dom";

import Swal from "sweetalert2";
import axios from 'axios';

const RoomActions = (props) => {


    const room = props.room;
   

    // Function for redirect
    const updateRoomNavigate = (id) => {
        window.location = `/updaterooms/${id}`;  
     }

   

    // Function for delete vehicle
    const deleteRoom = () => {
        Swal.fire({
            title: 'Are you want to delete Room',
            text: "Note that ths process can not be revert.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Delete'
        }).then((result) => {

            if (result.isConfirmed) {
                axios.delete(`http://localhost:8345/room/deleteroom/${room._id}`)
                    .then(res => {
                        Swal.fire(
                            'Done!',
                            'Room deleted successfully!',
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
            <th scope="row">{room.RooId}</th>
            <td>{room.roomType}</td>
            <td>{room.beads}</td>
            <td>{room.clients}</td>
            <td>{room.price}</td>
            <td>{room.description}</td>
            {
                !props.isGen ? <td>
                    <div class="d-flex">

                    <button onClick={() => updateRoomNavigate(room._id)} type="button" class="btn btn-outline-success m-1">Update</button>

                    

                    <button onClick={deleteRoom} type="button" class="btn btn-outline-danger m-1">Delete</button>
                    </div>
                </td> : <React.Fragment />
            }
        </tr>
    </React.Fragment>);
}

export default RoomActions;