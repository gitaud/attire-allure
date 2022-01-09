import React from 'react';
import styled from 'styled-components';
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
	${mobile({ marginTop: "25px", padding: "15px 10px" })}
`;

const Link = styled.a`
	margin: 10px 0px;
	font-size: 12px;
	text-decoration: underline;
	cursor: pointer;
`;

const Login = () => {
	return (
		<Container>
			<Wrapper>
				<Title>LOGIN </Title>
				<Form>
					<Input placeholder="email" />
					<Input type="password" placeholder="password" />
					<Button>LOGIN</Button>
					<Link>Forgot Password? </Link>
					<Link>Create an Account</Link>
				</Form>
			</Wrapper>
		</Container>
	);
}

export default Login