import React from "react";
import './login.css';
import axios from "axios";
import { useState } from "react";
import LoginNavbar from "../Navbar/LoginNavbar";

const Signup = () => {
	const [data, setData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
	});
	const [error, setError] = useState("");
	
	const [msg,setMsg]=useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};



	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8345/register/add";
      console.log(data);
			const { data: res } = await axios.post(url, data);
			//navigate("/login");
			setMsg(res.message);
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
				
			) {
				setError(error.response.data.message);
			
			}
		}
	};



    return (
        <div>

            <LoginNavbar/>

<section class="login-form dark">
        
        <div class="container">
          <form >
           
            {/* use for title */}
              <div class="products">
  
                 <div class="title">Registration</div>
            
             </div>
             
  
  
            <div class="card-details">
  
             
              <div class="row">    
               
               
                <div class="form-group col-sm-6">
                  <label for="card-holder">First Name</label>
       
                    <input 
                       type="text"
                       class="form-control " 
                       placeholder="First Name" 
                       aria-label="First Name" 
                       aria-describedby="basic-addon1" 
                       name="firstName"
                       id="firstName"
                       onChange={handleChange}
                       value={data.firstName}
                       />
                </div>
  
                <div class="form-group col-sm-6">
                  <label for="">Last Name</label>
                 
                     <input 
                        type="text" 
                        class="form-control" 
                        placeholder="Last Name" 
                        aria-label="Last Name" 
                        aria-describedby="basic-addon1"
                        name="lastName"
                        id="lastName"
                        onChange={handleChange}
                        value={data.lastName}
                        />
  
                   
              
                
                </div>
  
                <div class="form-group col-sm-12">
                  <label for="card-holder">E-mail Address</label>
       
                    <input 
                       type="text" 
                       class="form-control" 
                       placeholder="E-mail" 
                       aria-label="E-mail"
                       id="email" 
                       aria-describedby="basic-addon1"
                       name="email"
                       onChange={handleChange}
                       value={data.email}
                       />
                </div>
  
                <div class="form-group col-sm-12">
                  <label for="">Password</label>
                 
                   
                     <input 
                        type="password" 
                        class="form-control" 
                        placeholder="Password" 
                        aria-label="Password" 
                        aria-describedby="basic-addon1" 
                        name="password"
                        id="password"
                        onChange={handleChange}
                        value={data.password}
                        />
  
                  </div>
              
                <div class="form-group col-sm-12">
                   <label for="">City</label>
                 
                 
                   <input 
                      type="text" 
                      class="form-control" 
                      placeholder="City" 
                      aria-label="City" 
                      id="city"
                      aria-describedby="basic-addon1" 
                      name="city"
                      onChange={handleChange}
                      value={data.city}
                      />
  
                 </div>
               
						{error && <div className="error_msg">{error}</div>}
						{msg && <div className="sucess_msg">{msg}</div>}
                <div class="btngroup col-sm-4">
                  <button type="button" class="submit" onClick={handleSubmit}>Register</button>
                </div>
  
              </div>
            </div>
          </form>
        </div>
      </section>



    </div>
    )
}


export default Signup;