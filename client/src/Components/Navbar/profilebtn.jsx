import React from "react";

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
		<button onClick={useEffect} type="button" className="btn btn-outline-warning m-1">
			Profile
		</button>
		   
		</React.Fragment>
	);
};


export default ProfileNavigate;