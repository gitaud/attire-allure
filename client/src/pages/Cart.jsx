import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Add, Remove } from '@material-ui/icons';
import StripeCheckout from 'react-stripe-checkout';
import { useNavigate } from 'react-router';

import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { mobile } from "../responsive";
import { userRequest } from '../requestMethods';

const KEY = 'pk_test_51KIDpdJ6URmMXN5WwXGOCZWfppTNqtT2VZFAjjzuFe1nZBQJ80CQ7EIYzWBote2VTVGHcnpdcvprw7Yi3XohRdjh00jHM5nDTF';;

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
	border: 1px solid black;
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
	height: 250px;
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
	const cart = useSelector(state=> state.cart)
	const [stripeToken, setStripeToken] = useState(null);
	const navigate = useNavigate();

	const onToken = (token) => {
		setStripeToken(token);
	}

	useEffect(() => {
		const makeRequest = async () => {
			try {
				const res = await userRequest.post("/checkout/payment", {
					tokenId: stripeToken.id,
					amount: (cart.total + 150),
				});
				console.log(res.data)
				navigate("/success", {data: res.data})
			}
			catch(err) {
				console.log(err);
			}
		};
		stripeToken && makeRequest();
	}, [stripeToken, cart.total, navigate])

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
						{cart.products.map(product => (
							<>
							<Product key={product._id}>
								<ProductDetails>
									<Image src={product.img} />
									<Details>
										<ProductName><b>Product:</b> {product.title}</ProductName>
										<ProductId><b>ID: </b> {product._id}</ProductId>
										<span style={{display: "flex", flexDirection: "row", alignItems: "center"}}><b style={{marginRight: "5px"}}>Color:</b> <ProductColor color={product.color}/> </span>
										<ProductSize><b>Size:</b> {product.size}</ProductSize>
									</Details>
								</ProductDetails>
								<PriceDetails>
									<ProductAmountContainer>
										<Add />
										<ProductAmount>{product.quantity}</ProductAmount>
										<Remove />
									</ProductAmountContainer>
									<ProductPrice>Ksh {product.price * product.quantity}</ProductPrice>
								</PriceDetails>
						</Product>
						<Hr key={product._id + '1'}/>
						</>
						))}
						
					</Info>

					<Summary>
						<SummaryTitle>Order Summary</SummaryTitle>
						<SummaryItem>
							<SummaryItemText>Subtotal</SummaryItemText>
							<SummaryItemPrice>Ksh {cart.total}</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem>
							<SummaryItemText>Delivery Charges</SummaryItemText>
							<SummaryItemPrice>Ksh 150</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem>
							<SummaryItemText type="total">Total</SummaryItemText>
							<SummaryItemPrice>Ksh {cart.total + 150}</SummaryItemPrice>
						</SummaryItem>
						<StripeCheckout
							name="Ndq Apparel" 
							image=""
							billingAddress
							shippingAddress
							description = {`Your total is Ksh ${cart.total + 150}`}
							amount={cart.total + 150}
							token={onToken}
							stripeKey = {KEY}
						>
							<Button>CHECKOUT NOW</Button>
						</StripeCheckout>
					</Summary>
				</Bottom>
			</Wrapper>
			<Footer />
		</Container>
	);
}

export default Cart;