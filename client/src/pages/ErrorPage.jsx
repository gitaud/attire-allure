import React from 'react';
import styled from 'styled-components';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const Container = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
	justify-content: space-between;
	align-items: center;
`;

const ErrorPage = () => {
	return (
		<Container>
			<Navbar />
			<h3>ERROR! PAGE NOT FOUND</h3>
			<Footer />
		</Container>
	)
}

export default ErrorPage;