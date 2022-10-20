import React from "react";




const SignIn = () => {

     const useEffect = () => {
			window.location = "/login";	
     }
	

	return (
		<React.Fragment>
		<button onClick={useEffect} type="button" className="btn btn-outline-warning m-1">
			Sign In
		</button>
		   
			</React.Fragment>
	);
};


export default SignIn;