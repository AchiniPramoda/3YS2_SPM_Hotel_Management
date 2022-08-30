import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import React from "react";
import  "./style.css";
import success from './suc.png';
import RobotAnimated from "./robot-animated"

const EmailVerify = () => {
	const [validUrl, setValidUrl] = useState(true);
	const param = useParams();

	useEffect(() => {
		const verifyEmailUrl = async () => {
			try {
				const url =`http://localhost:8345/register/${param.id}/verify/${param.token}`;
				
				const { data } = await axios.get(url);
				console.log(data);
				setValidUrl(true);
			} catch (error) {
				console.log(error);
				setValidUrl(false);
			}
		};
		verifyEmailUrl();
	}, [param]);

	return (
		<React.Fragment>
			{/* {validUrl ? ( */}
				<div className="containers">
					<img src={success} alt="success_img" className="styles.success_img" />
					<h1>Email verified successfully</h1>
					
					<Link to="/login">
						<button className="green_btn">Login</button>
					</Link>
				</div>
			{/* // ) : (
				
			// 	<h1 style={{color: "black" }}>404 Not Found<br/>
				
				
			// 	<div >
             
            //     </div >
			// 	something went wrong ,Try again !!!!!!!
			// 	</h1>

			// )} */}
			
			</React.Fragment>
	);
};


export default EmailVerify;