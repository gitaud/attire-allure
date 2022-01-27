import React from "react";

class Success extends React.Component {
	// eslint-disable-next-line
	constructor(props) {
		super(props);
	}
	render() {
		return(
			<div
				style={{
					height: "100vh",
					display: "flex",
					justifyContent: "center",
					alignItems: "center"
				}}
			>
				<button
					style={{
						border: "none",
						width: 120,
						borderRadius: 5,
						padding: "20px",
						backgroundColor: "green",
						color:"white",
						fontWeight: "600",
						cursor: "pointer",
					}}
				>
					Success
				</button>
			</div>
		)
	}
}

export default Success