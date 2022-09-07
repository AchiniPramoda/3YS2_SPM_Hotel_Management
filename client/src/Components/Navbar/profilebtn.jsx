import React from "react";

import axios from "axios";



const ProfileNavigate = () => {

	const useEffect = () => {
		
		
			window.location.href = "/profileview/6316f003d3327daec2608759";	
		
		
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