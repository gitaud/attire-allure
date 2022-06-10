import React, {useState} from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import {login} from "../redux/apiCalls";
import { mobile } from "../responsive";


const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: rgba(255, 182, 193, 0.4);
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Wrapper = styled.div`
	width: 40%;
	padding: 20px;
	background-color: white;
	${mobile({ width: "75%" })}
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
`;

const Title = styled.h1`
	font-size: 24px;
	font-weight: 300;
`;

const Input = styled.input`
	flex: 1;
	min-width: 40%;
	margin: 10px 0;
	padding: 10px;
`;


const Button = styled.button`
	wdith: 40%;
	border: none;
	padding: 15px 20px;
	background-color: teal;
	color: white;
	cursor: pointer;
	margin-top: 15px;
	margin-bottom: 10px;
	${mobile({ marginTop: "25px", padding: "15px 10px" })};

	&: disabled {
		color: grey;
		cursor: not-allowed;
	}
`;

const Link = styled.a`
	margin: 10px 0px;
	font-size: 12px;
	text-decoration: underline;
	cursor: pointer;
`;

const Error = styled.span`
	color: red;
`;

const Login = () => {
	const [email, setUsername] = useState("");
	const [password, setPassword] = useState("")
	const dispatch = useDispatch();
	const { isFetching, error } = useSelector((state) => state.user);

	const handleClick = (e) => {
		e.preventDefault();
		login(dispatch, { email, password })
	}

	return (
		<Container>
			<Wrapper>
				<Title>LOGIN </Title>
				<Form>
					<Input 
						placeholder="email"
						type="email" 
						onChange = {(e) => setUsername(e.target.value)}
						/>
					<Input 
						type="password" placeholder="password" 
						onChange = {(e) => setPassword(e.target.value)}	
					/>
					<Button onClick={handleClick} disabled={isFetching}>LOGIN</Button>
					{error && <Error>Something went wrong...</Error>}
					<Link>Forgot Password? </Link>
					<Link>Create an Account</Link>
				</Form>
			</Wrapper>
		</Container>
	);
}

export default Login;