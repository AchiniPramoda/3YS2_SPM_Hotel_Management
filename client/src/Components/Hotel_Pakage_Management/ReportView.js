import React, { useEffect, useState } from "react";
import "./ReportGenerator";
import GeneratePdf from "./ReportGenerator";
import axios from "axios";

const Users = () =>{

    const [users,setUsers] = useState([]);

    useEffect(() => {

        axios.get("http://localhost:5000/api/category").then((res) => {
            console.log(res.data);
            setUsers(res.data);
        }).catch((err) => {
            console.log(err);
        })

    }, [])

  













    return(

        <div>
            <div className="container mb-4 mt-4 p-3">
                <div className="row">
                    {
                        <div className="row">
                            {(
                                <button className="btn btn-primary col-lg-2" onClick={()=>GeneratePdf(users)}>
                                    Generate Report PDF
                                </button>
                            )}    
                        </div>
                    }
                </div>
            </div>
        </div>

    )

}

export default Users;