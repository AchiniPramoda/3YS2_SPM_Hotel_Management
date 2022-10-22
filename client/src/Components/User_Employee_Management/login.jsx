import React from "react";
import './login.css';
import Footer from "../Footer/Footer";
import Navbar from '../Navbar/LoginNavbar';
import { useState } from "react";
import axios from "axios";

const Login = () => {
	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");
	

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
		  
			  console.log(data);
		  
			  if (data.email === "shaliviraj12@gmail.com" && data.password === "#99Admin#") {
				localStorage.setItem("UsID", "ADMIN");
				alert("Login As Admin..");
				window.location = "/admindashboard";	
			}
			else {			
					
			const url = "http://localhost:8345/login/login/:id";
			const { data: res } = await axios.post(url, data);
      console.log(data);
			localStorage.setItem("token", res.data);
      window.location = "/dashboard";
	
			}
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
      
      <Navbar/>

      <section class="login-form dark">
        
        <div class="container">
        <form>
         
          {/* use for title */}
            <div class="products">

               <div class="title">Login</div>
          
           </div>
           


          <div class="card-details">

           
            <div class="row">    
             
                {/* For Input fields that wants column  */}
            
              <div class="form-group col-sm-10">
                <label for="card-holder">E-mail</label>
     
                  <input 
                     
                     type="text"
                     class="form-control ml-1" 
                     placeholder="E-mail" 
                     aria-label="E-mail" 
                     aria-describedby="basic-addon1" 
                     name="email"
                     id="email"
                     onChange={handleChange}
                     value={data.email}
                     />
              </div>

           

              <div class="form-group col-sm-10">
                <label for="card-holder">Password</label>
     
                <input 
                      type="password" 
                      class="form-control ml-1" 
                      placeholder="password" 
                      aria-label="password" 
                      aria-describedby="basic-addon1"
                      name="password"
                      id="password"
                      onChange={handleChange}
                      value={data.password}
                      />
              </div>
              <div class="btngroup col-sm-4">
                <button type="button" class="submit" onClick={handleSubmit }>Login</button>
              </div>

            </div>
          </div>
        </form>
      </div>
    </section>

    <Footer/>

    </div>
  );
}

export default Login;