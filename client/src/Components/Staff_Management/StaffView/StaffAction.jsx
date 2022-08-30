import React from 'react';
import { useNavigate  } from "react-router-dom";

import Swal from "sweetalert2";
import axios from 'axios';

const StaffActions = (props) => {


    const history = useNavigate();
    const staff = props.staff;

    // Function for redirect
    const handleClick = (path) => {
        history.push(path);
    }

    // Function for delete vehicle
    const deleteStaff = () => {
        Swal.fire({
            title: 'Are you want to delete The Staff member',
            text: "Note that ths process can not be revert.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Delete'
        }).then((result) => {

            if (result.isConfirmed) {
                axios.delete(`http://localhost:8345/staff/delete/${staff._id}`)
                    .then(res => {
                        Swal.fire(
                            'Done!',
                            'Staff deleted successfully!',
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
            <th scope="row">{staff.firstname}</th>
            <td>{staff.lastname}</td>
            <td>{staff.staffid}</td>
            <td>{staff.phone}</td>
            <td>{staff.email}</td>
            <td>{staff.possition}</td>
            <td>{staff.address}</td>
            <td>{staff.dateofbirth}</td>
            <td>{staff.wortype}</td>
            <td>{staff.comment}</td>
            <td>{staff.salary}</td>
            {
                !props.isGen ? <td>
                    <div class="d-flex">
                    <button onClick={() => handleClick(`http://localhost:8345/staff/updatestaff/${staff._id}`)} type="button" class="btn btn-outline-success m-1">Update</button>
                    <button onClick={deleteStaff} type="button" class="btn btn-outline-danger m-1">Delete</button>
                    </div>
                </td> : <React.Fragment />
            }
        </tr>
    </React.Fragment>);
}

export default StaffActions;