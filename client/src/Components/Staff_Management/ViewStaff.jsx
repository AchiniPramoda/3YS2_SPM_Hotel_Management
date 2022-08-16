import React, {useState, useEffect} from "react";
import axios from "axios";
import "./StaffView.css"

function ViewStaff() {


    const [staff, setstaff] = useState([])

   const getstaff=()=>{
             axios.get("http://localhost:8345/staff/viewstaff/")
              .then((res)=>{
                console.log(res.data);
                setstaff(res.data);
              })
              .catch((error)=>{
                console.log(error);
              })
   }
    
    useEffect(()=>{
        getstaff();
    })

    const onDeleteHandlle = (id) => {    
        axios
          .delete("http://localhost:8345/staff/delete/"+ id)
        //   .then((res)=> AlertMsg("success", "success", res.data))
        //   .catch((err) => AlertMsg("error", "error", err.message))
          .then((res)=> console.log(res.data))
          .catch((err)=> console.log(err.message))  
    };
  
     
  
     const updateStaffNavigate = (id) => {
         window.location = `/editstaff/${id}`;  
     }


    return(
        <div className="staff-view">
            <div className="title">Staff View</div>

   <div>
   
        <div class="col-md-12">
            <table className="table">
                <tr className="table-header">
                    <th class="cell">First Name</th>
                    <th class="cell">Last Name</th>
                    <th>Staff ID</th>
                    <th class="cell">Phone</th>
                    <th class="cell">E-Mail</th>
                    <th class="cell">Possition</th>
                    <th class="cell">Address</th>
                    <th class="cell">Date OF Birth</th>
                    <th class="cell">Worktype</th>
                    <th class="cell">Comment</th>
                    <th class="cell">Salary</th>
                    <th class="cell">Action</th>
                </tr>

                
                {staff.map((view)=>(
               <tr>
                    <td class="cell"> {view.firstname} </td>
                    <td class="cell">{view.lastname}</td>
                    <td class="cell">{view.staffid}</td>
                    <td class="cell">{view.phone}</td>
                    <td class="cell">{view.email}</td>
                    <td class="cell">{view.possition}</td>
                    <td class="cell">{view.address}</td>
                    <td class="cell">{view.dateofbirth}</td>
                    <td class="cell">{view.wortype}</td>
                    <td class="cell">{view.comment}</td>
                    <td class="cell">{view.salary}</td>
                    <td class="cell">
                    <div className="btn-group">
                    <button aria-label="delete" class="btn btn-outline-danger" onClick={()=>onDeleteHandlle(view._id)}>Delete</button> 
                    <button aria-label="delete" class="btn btn-outline-success" onClick={()=>updateStaffNavigate(view._id)}>Edit</button> 
                    </div>
                    {/* <Button aria-label="delete" onClick={() =>updategroupNavigate(view._id)} > Edit</Button>  */}
                    </td>
                    
                </tr>

))}


            </table>
        </div>
  
</div>

        </div>
    )
}

export default ViewStaff;