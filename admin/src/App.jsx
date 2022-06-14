import React from 'react';
import {  BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/home/Home';
import UserList from './pages/userList/UserList';
import User from "./pages/user/User";
import './App.css';

const App = () => {
	return(
		<Router>
			<Topbar />
			<div className="container">
				<Sidebar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/users" element={<UserList />} />
					<Route path="/user/:userId" element={<User />} />
				</Routes>
			</div>
			</Router>
	)
}

export default App;