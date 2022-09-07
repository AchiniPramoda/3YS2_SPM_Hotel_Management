import React from 'react';
import Swal from "sweetalert2";
import axios from 'axios';

const UserActions = (props) => {

    const user = props.user;


    const deleteUser = () => {
        Swal.fire({
            title: 'Are you want to delete The User member',
            text: "Note that ths process can not be revert.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Delete'
        }).then((result) => {

            if (result.isConfirmed) {
                axios.delete(`http://localhost:8345/register/deleteuser/${user._id}`)
                    .then(res => {
                        Swal.fire(
                            'Done!',
                            'User deleted successfully!',
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
            <th scope="row">{user.firstName}</th>
            <td>{user.lastName}</td>
            <td>{user.email}</td>
            <td>{user.city}</td>
            
            {
                !props.isGen ? <td>
                    <div class="d-flex">
                    
                    <button onClick={ deleteUser } type="button" class="btn btn-outline-danger m-1">Delete</button>
                    </div>
                </td> : <React.Fragment />
            }
        </tr>
    </React.Fragment>);
}

export default UserActions;