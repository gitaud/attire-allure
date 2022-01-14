import React from 'react';
import styled from 'styled-components';
import { Facebook, Twitter, Instagram, Phone, Room, MailOutline } from '@material-ui/icons';
import { mobile } from "../responsive";

const Container = styled.div`
	display: flex;
	${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	padding: 20px;
`
const Logo = styled.h1`
	${mobile({ textAlign: "center" })}
`;

const Desc = styled.p`
	margin: 20px 0px;
`;

const SocialContainer = styled.div`
	display: flex;
	flex-direction: row;
	${mobile({ justifyContent: "center" })}
`;

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
`;

const Center = styled.div`
	flex: 1;
	padding: 20px;
	${mobile({ display: "none" })}
`;

const Title = styled.h3`
	margin-bottom: 30px;
`;

const List = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
	display: flex;
	flex-wrap: wrap
`;

const ListItem = styled.li`
	width: 50%;
	margin-bottom: 10px;
`;

const Right = styled.div`
	flex: 1;
	padding: 20px;
	${mobile({ textAlign: "center" })}
`;

const ContactItem = styled.div`
	margin-bottom: 20px;
	display: flex;
	align-items: center;
	${mobile({ justifyContent: "center" })}
`;

const Payment = styled.img`
	width: 50%;
`;

const Footer = () => {
	return (
		<Container>
			<Left>
				<Logo>NdQ Apparel</Logo>
				<Desc>NdQ Apparel is the newest way of acquiring your highly unique and designer clothing. Here, you do not just purchase the fabric, you get to own a piece of a totally unique abstract artwork that takes hundreds of man-hours to design. All our designs are done by hand. Hit the shop and grab your next outfit while stocks last</Desc>
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
			<Right>

				<Title>Contact</Title>
				<ContactItem><Room style={{marginRight: "10px"}}/> Ruaka, Nairobi</ContactItem>
				<ContactItem><Phone style={{marginRight: "10px"}}/>+254 702 851 503</ContactItem>
				<ContactItem><MailOutline style={{marginRight: "10px"}}/> dev.gits@gmail.com</ContactItem>
				<Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
			</Right>
		</Container>
	)
}

export default Footer;