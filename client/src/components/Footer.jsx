import React from 'react';
import styled from 'styled-components';
import { Facebook, Twitter, Instagram } from '@material-ui/icons';

const Container = styled.div`
	display: flex;
`
const Left = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	padding: 20px;
`
const Logo = styled.h1``
const Desc = styled.p`
	margin: 20px 0px;
`
const SocialContainer = styled.div`
	display: flex;
	flex-direction: row;
`
const SocialIcon = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	color: white;
	background-color:#${props => props.color};
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 20px;
`

const Center = styled.div`
	flex: 1;
	padding: 20px;
`

const Title = styled.h3`
	margin-bottom: 30px;
`

const List = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
	display: flex;
	flex-wrap: wrap
`

const ListItem = styled.li`
	width: 50%;
`

const Right = styled.div`
	flex: 1;
	padding: 20px;
`

const Footer = () => {
	return (
		<Container>
			<Left>
				<Logo>ATTIRE ALLURE</Logo>
				<Desc>I often find myself wondering where to store images in React app. Especially when I'm starting a new project. I decided to do a little bit of research to find out what options for storing images are available</Desc>
				<SocialContainer>
					<SocialIcon color="3B5999">
						<Facebook />
					</SocialIcon>
					<SocialIcon color="E4405F">
						<Instagram />
					</SocialIcon>
					<SocialIcon color="55ACEE">
						<Twitter />
					</SocialIcon>
				</SocialContainer>
			</Left>

			<Center>
				<Title>Useful Links</Title>
				<List>
					<ListItem>Home</ListItem>
					<ListItem>Cart</ListItem>
					<ListItem>Men's Products</ListItem>
					<ListItem>Women's Products</ListItem>
					<ListItem>Kids' Products</ListItem>
					<ListItem>Stickers</ListItem>
				</List>
			</Center>
			<Right></Right>
		</Container>
	)
}

export default Footer;