import React, {useState,useEffect}  from 'react';
import "./Profileview.css";
import Navbar from "../Navbar/Navbar";
import {getUser, removeUser} from "./common";
import axios from "axios";
import { useParams } from 'react-router-dom';

function ProfileView() {


  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [city, setcity] = useState("");
 
  // const [errors, seterrors] = useState([]);
  // const [emailerror, setemailerror] = useState("");   
  // const[loginMsg] = useState(localStorage.getItem("loginMsg"));//this sets logout msg if any
  // const[success,setsuccess] = useState("")

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

  // const personalInfoForm = () => {
  //     const inputFields = document.querySelectorAll("input[type='text']");
  //     for(let field = 0 ; field < inputFields.length ; field++){
  //         inputFields[field].removeAttribute('disabled');
  //     }
  //     document.getElementById('updateButton').removeAttribute('hidden');
  //     document.getElementById('cancelButton').removeAttribute('hidden');
  //     document.getElementById('resetButton').setAttribute('hidden', 'true');
  //     document.getElementById('editButton').setAttribute('hidden','true');
      
  // }

  // const editData = async(e) => {
  //     e.preventDefault();
  //     setemailerror('');
  //     seterrors([]);
  //     const response = await axios.post(`http://localhost:8070/customer/profile/update/${id}`,{fname,lname,address,pNo},{withCredentials: true});
  //     if (response.data.success) {
  //         const inputFields = document.querySelectorAll("input[type='text']");
  //         for(let field = 0 ; field < inputFields.length ; field++){
  //             inputFields[field].setAttribute('disabled','true');
  //         }
  //         document.getElementById('updateButton').setAttribute('hidden','true');
  //         document.getElementById('cancelButton').setAttribute('hidden','true');
  //         document.getElementById('resetButton').removeAttribute('hidden');
  //         document.getElementById('editButton').removeAttribute('hidden');
  //         setsuccess('You have successfully updated your profile!');
  //         props.history.push("/customer/profile");
  //     }
  //     if (response.data.errors) {
  //         seterrors(response.data.errors);
  //     }
  //     if(response.data.emailerror){
  //         setemailerror(response.data.emailerror);
  //     } 
  // }
  // const cancelUpdate = () => {
  //         window.location = '/customer/profile'
  // }

  // const resetButton = () => {
  //     props.history.push("/customer/profile/password-reset");
  // }
  // const logoutHandler = () => {
  //     if(window.confirm("Do you want to logout?")){
  //         removeUser();
  //         localStorage.setItem('logoutMsg', 'You have successfully logged out!');
  //         window.location = '/customer/login'
  //     }
  // }


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