import React from 'react';
import { useNavigate } from 'react-router-dom';

import Swal from "sweetalert2";
import axios from 'axios';

const StaffActions = (props) => {



   

    // Function for redirect
    const updatestaffNavigate = (id) => {
        window.location = `/editstaff/${id}`;  
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
            <td>{staff.staffId}</td>
            <td>{staff.phone}</td>
            <td>{staff.staffemail}</td>
            <td>{staff.possition}</td>
            <td>{staff.address}</td>
            <td>{staff.dateofbirth}</td>
            <td>{staff.wortype}</td>
            <td>{staff.comment}</td>
            <td>{staff.salary}</td>
            {
                !props.isGen ? <td>
                    <div class="d-flex">
                    <button onClick ={ () => updatestaffNavigate(staff._id)} type="button" class="btn btn-outline-success m-1">Update</button>
                    <button onClick={deleteStaff} type="button" class="btn btn-outline-danger m-1">Delete</button>
                    </div>
                </td> : <React.Fragment />
            }
        </tr>
    </React.Fragment>);
}

export default StaffActions;