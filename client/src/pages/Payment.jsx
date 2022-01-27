import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Success from "../components/Success";
import Pay from "../components/Pay"

class Payment extends React.Component {
	// eslint-disable-next-line
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<Router>
				<Routes>
					<Route path="/pay" element={<Pay />}>
					</Route>
					<Route path="/success" element={<Success />}>
					</Route>
				</Routes>
			</Router>
		);
	}
};

export default Payment