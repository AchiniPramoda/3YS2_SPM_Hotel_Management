import React from "react";




const SignUp = () => {

     const useEffect = () => {
			window.location = "/registration";	
     }
	

	return (
		<React.Fragment>
		<button onClick={useEffect} type="button" className="btn btn-outline-warning m-1">
			Sign Up
		</button>
		   
			</React.Fragment>
	);
};


export default SignUp;