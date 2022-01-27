import React, {useState, useEffect } from "react";
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const KEY = 'pk_test_51KIDpdJ6URmMXN5WwXGOCZWfppTNqtT2VZFAjjzuFe1nZBQJ80CQ7EIYzWBote2VTVGHcnpdcvprw7Yi3XohRdjh00jHM5nDTF';

function Pay() {

	const [stripeToken, setStripeToken] = useState(null);
	const navigate = useNavigate()

	const onToken = (token) => {
		setStripeToken(token);
	}

	useEffect(() => {
		const makeRequest = async () => {
			try {
				const res = await axios.post("http://localhost:5000/api/checkout/payment", {
					tokenId: stripeToken.id,
					amount: 15000,
				});
				console.log(res.data);
				navigate("/success");
			}catch(err) {
				console.log(err);
			}
		};
		stripeToken && makeRequest()
	}, [stripeToken, navigate]);

	return(
		<div
			style={{
				height: "100vh",
				display: "flex",
				alignItems: "center",
				justifyContent: "center"
			}}
		>
			{stripeToken ? (<span>Processing.. Please wait ... </span>) : (
				<StripeCheckout 
					name="Ndq Apparel" 
					image=""
					billingAddress
					shippingAddress
					description = "Your total is Ksh 15,000"
					amount={15000}
					token={onToken}
					stripeKey = {KEY}
					>

					<button
						style={{
							border: "none",
							width: 120,
							borderRadius: 5,
							padding: "20px",
							backgroundColor: "black",
							color:"white",
							fontWeight: "600",
							cursor: "pointer",
						}}
					>
						Pay Now
					</button>
				</StripeCheckout>
			)}
			
		</div>
	);
}

export default Pay