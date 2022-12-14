import React from 'react';
import { useNavigate  } from "react-router-dom";

import Swal from "sweetalert2";
import axios from 'axios';

const HallActions = (props) => {


    const history = useNavigate();
    const hall = props.hall;

    const handleClick = (id) => {
        window.location = `/updatehall/${id}`;  
    }

    
    const deleteHall = () => {
        Swal.fire({
            title: 'Are you sure, you want to delete the Hall',
            text: "Note that this process can not be revert.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Delete'
        }).then((result) => {

            if (result.isConfirmed) {
                axios.delete(`http://localhost:8345/hall/deletehall/${hall._id}`)
                    .then(res => {
                        Swal.fire(
                            'Done!',
                            'Hall deleted successfully!',
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
            <th scope="row">{hall.name}</th>
            <td>{hall.hallType}</td>
            <td>{hall.Space}</td>
            <td>{hall.Guest}</td>
            <td>{hall.price}</td>
            <td>{hall.description}</td>
            <td>{hall.feacture}</td>
            <td>{hall.event}</td>
       
            {
                !props.isGen ? <td>
                    <div class="d-flex">
                    <button onClick={() => handleClick(hall._id)} type="button" class="btn btn-outline-success m-1">Update</button>
                    <button onClick={deleteHall} type="button" class="btn btn-outline-danger m-1">Delete</button>
                    </div>
                </td> : <React.Fragment />
            }
        </tr>
    </React.Fragment>);
}

export default HallActions;