import React from "react";
import { useEffect, useState } from "react";
import {  useParams ,Link} from "react-router-dom";
import axios from "axios";



const ProfileNavigate = () => {

	const useEffect = () => {
		axios.get("http://localhost:8345/register/6316f003d3327daec2608759")
		.then((res) => {
			console.log(res.data);
			window.location.href = "/profileview/"+res.data._id;	
		})
		.catch((err) => {
			console.log(err);
		})
	}
				
				
			
			

	return (
		<React.Fragment>
		<button onClick={useEffect}>
			hghgh
		</button>
		   
		</React.Fragment>
	);
};


export default ProfileNavigate;