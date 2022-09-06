import React from "react";
import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import axios from "axios";



const ProfileNavigate = () => {



	const param = useParams();

	useEffect(() => {
		const verifyEmailUrl = async () => {
			try {
				const url =`http://localhost:8345/register/${param.id}/verify/${param.token}`;
				
				const { data } = await axios.get(url);
				console.log(data);
			
			} catch (error) {
				console.log(error);
			
			}
		};
		verifyEmailUrl();
	}, [param]);

	return (
		<React.Fragment>
			
            <button onClick={ProfileNavigate}>Profile</button>
			
			</React.Fragment>
	);
};


export default ProfileNavigate;