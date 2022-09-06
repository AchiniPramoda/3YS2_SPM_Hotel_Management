import React, {useState,useEffect}  from 'react';
import "./Profileview.css";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import { useParams } from 'react-router-dom';

function ProfileView() {

  

  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [city, setcity] = useState("");
   

  const params = useParams();


  useEffect(() => {
      async function fetchData(){
          const users = (await axios.get(`http://localhost:8345/register/${params.id}`)).data;
          setfirstName(users.firstName);
          setlastName(users.lastName); 
          setemail(users.email); 
          setcity(users.city);  
          // setphone("0"+customer.pNo);    
      }
 
      fetchData();
  })

 

  return (
    <div>
      <Navbar />
      <section class="profile-form dark">
           <div className="container"> 
            <form>

            <div class="products">

                  <div class="title">Your Profile</div>

            </div>
         
                 <div class="card-details">
                   
                    <div class="pronames">First Name  : <input className="form-control" type="text" onChange={(e) => setfirstName(e.target.value)} value={firstName} disabled/>  </div>
                   
                    <div class="pronames">Last Name   : <input className="form-control" type="text" onChange={(e) => setlastName(e.target.value)} value={lastName} disabled/></div>

                    <div class="pronames">E-mail      : <input className="form-control" type="text" onChange={(e) => setemail(e.target.value)} value={email} disabled/></div>

                    <div class="pronames">City        : <input className="form-control" type="text" onChange={(e) => setcity(e.target.value)} value={city} disabled/></div>
                   
                    <div class="pronames">Password    : <input className="form-control" type="text" onChange={(e) => setfirstName(e.target.value)} value={firstName} disabled/></div>
                    
                  
                  
                  
                   <div class="card-footer">
                      
                         
                      <button  type="button" className="editbtn">Edit</button>
                          

                    
                   </div>
               </div>
           </form>
           <br/>
       </div>
</section>
  </div>
  );
}

export default ProfileView;