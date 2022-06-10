import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';
// import { useNavigate } from "react-router-dom";

import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
// import Payment from "./pages/Payment";
import ErrorPage from "./pages/ErrorPage";

// Components
import Success from "./pages/Success";
import Pay from "./components/Pay"


const App = () => {
	const user = useSelector((state) => state.user.currentUser);
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />}/>
				<Route path="/products" element={<ProductList />} />
				<Route path="/products/:category" element={<ProductList />}/>
				<Route path="/product/:id" element={<Product />}/>
				<Route path="/register" element={user ? <Navigate to="/"/> : <Register />}/>
				<Route path="/login" element={user ? <Navigate to="/"/> : <Login />} />
				<Route path="/cart" element={<Cart />}/>
				<Route path="/pay" element={<Pay />} />
				<Route path="/success" element={<Success />} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</Router>
	)
};

export default App;