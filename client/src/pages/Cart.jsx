import React from 'react';
import styled from 'styled-components';
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Add, Remove } from '@material-ui/icons';
import { mobile } from "../responsive";

const Container = styled.div``;

const Wrapper = styled.div`
	padding: 20px;
	${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
	font-weight: 300;
	text-align: center;
`;

const Top = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 20px;
`;

const TopButton = styled.button`
	padding: 10px;
	font-weight: 600;
	cursor: pointer;
	border: ${(props) => props.type === "filled" && "none"};
	background-color: ${(props) => props.type === "filled" ? "black" : "transparent"};
	color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
	${mobile({ display: "none" })}
`;

const TopText = styled.span`
	text-decoration: underline;
	cursor: pointer;
	margin: 0px 10px;
`;

const Bottom = styled.div`
	display: flex;
	justify-content: space-between;
	${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
	flex: 3;
`;

const Product = styled.div`
	display: flex;
	justify-content: space-between;
	${mobile({ flexDirection: "column" })}
`;

const ProductDetails = styled.div`
	flex: 2;
	display: flex;
`;

const Image = styled.img`
	width: 200px;
`;

const PriceDetails = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Details = styled.div`
	padding: 20px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
	width: 20px;
	height: 20px;
	border-radius: 50%;
	background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const ProductAmountContainer = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 30px;
`;

const ProductAmount = styled.div`
	font-size: 24px;
	margin: 5px;
	${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
	font-size: 30px;
	font-weight: 300;
	${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
	background-color: #eee;
	border: none;
	height: 1px;
	margin: 5px;
`;

const Summary = styled.div`
	flex: 1;
	border: 0.5px solid lightgray;
	border-radius: 10px;
	padding: 20px;
	height: 50vh;
`;

const SummaryTitle = styled.h1`
	font-weight: 200;
`;

const SummaryItem = styled.div`
	margin: 30px 0px;
	display: flex;
	justify-content: space-between;
	font-weight: ${(props) => props.type === "total" && "500"};
	font-size: ${(props) => props.type === "total" && "24px"}
`;

const SummaryItemText = styled.div``;

const SummaryItemPrice = styled.div``;

const Button = styled.button`
	width: 100%;
	padding: 10px;
	background-color: black;
	color: white;
	font-weight: 600;
`;

const Cart = () => {
	return(
		<Container>
			<Announcement />
			<Navbar />
			<Wrapper>
				<Title>YOUR CART</Title>
				<Top>
					<TopButton>CONTINUE SHOPPING</TopButton>
					<TopTexts>
						<TopText>Shopping Bag (2)</TopText>
						<TopText>Your WishList (0)</TopText>
					</TopTexts>
					<TopButton type="filled">CHECKOUT NOW</TopButton>
				</Top>
				<Bottom>
					<Info>
						<Product>
							<ProductDetails>
								<Image src="https://res.cloudinary.com/dctw6ghne/image/upload/v1639052320/attire3_tkomst.jpg" />
								<Details>
									<ProductName><b>Product:</b> Black T-Shirt</ProductName>
									<ProductId><b>ID: </b> 93273413432</ProductId>
									<ProductColor color="black" />
									<ProductSize><b>Size:</b> L</ProductSize>
								</Details>
							</ProductDetails>
							<PriceDetails>
								<ProductAmountContainer>
									<Add />
									<ProductAmount>3</ProductAmount>
									<Remove />
								</ProductAmountContainer>
								<ProductPrice>Ksh 4,500</ProductPrice>
							</PriceDetails>
						</Product>
						<Hr />
						<Product>
							<ProductDetails>
								<Image src="https://res.cloudinary.com/dctw6ghne/image/upload/v1639052320/attire2_mxjcrn.jpg" />
								<Details>
									<ProductName><b>Product:</b> SweatShirt</ProductName>
									<ProductId><b>ID: </b> 85423479058</ProductId>
									<ProductColor color="pink" />
									<ProductSize><b>Size:</b> M</ProductSize>
								</Details>
							</ProductDetails>
							<PriceDetails>
								<ProductAmountContainer>
									<Add />
									<ProductAmount>2</ProductAmount>
									<Remove />
								</ProductAmountContainer>
								<ProductPrice>Ksh 5,000</ProductPrice>
							</PriceDetails>
						</Product>
					</Info>
					<Summary>
						<SummaryTitle>Order Summary</SummaryTitle>
						<SummaryItem>
							<SummaryItemText>Subtotal</SummaryItemText>
							<SummaryItemPrice>Ksh 9,500</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem>
							<SummaryItemText>VAT</SummaryItemText>
							<SummaryItemPrice>Ksh 1,520</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem>
							<SummaryItemText>Delivery Charges</SummaryItemText>
							<SummaryItemPrice>Ksh 500</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem>
							<SummaryItemText>Early Birds Discount</SummaryItemText>
							<SummaryItemPrice>Ksh -1,000</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem>
							<SummaryItemText type="total">Total</SummaryItemText>
							<SummaryItemPrice>Ksh 10,520</SummaryItemPrice>
						</SummaryItem>
						<Button>CHECKOUT NOW</Button>
					</Summary>
				</Bottom>
			</Wrapper>
			<Footer />
		</Container>
	);
}

export default Cart;