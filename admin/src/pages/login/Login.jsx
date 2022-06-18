import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from "../../redux/apiCalls";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useDispatch();

	const handleClick = (e) => {
		e.preventDefault();
		// Send login data
		login(dispatch, {email, password});
	}
	
	return (
		<div style={
			{
				display: "flex",
				flexDirection: "column",
				alignItems:"center",
				justifyContent: "center",
				height: "100vh",
			}
		}>
			<input style={{padding: 10, marginBottom: 20}} type="text" placeholder="admin@gmail.com" onChange={(e) => setEmail(e.target.value)} />
			<input style={{padding: 10, marginBottom: 20}} type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
			<button style={{ padding: 10, width: 100}} onClick={handleClick}>Login</button>
		</div>
	)
}