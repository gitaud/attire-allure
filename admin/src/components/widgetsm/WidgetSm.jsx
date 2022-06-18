import React, { useState, useEffect } from 'react';
import { Visibility } from '@material-ui/icons';
import { userRequest } from "../../requestMethods";
import "./WidgetSm.css";

export default function WidgetSm() {

	const [users, setUsers] = useState([]);

	useEffect(() => {
		const getUsers = async () => {
			try {
				const res = await userRequest.get("users/?new=true");
			setUsers(res.data)
			} catch(err) {
				console.log(err);
			}
		};
		getUsers();
	}, []);

	return (
		<div className="widgetSm">
			<span className="widgetSmTitle">New Members</span>
			<ul className="widgetSmList">

				{ users.map((user) => (
					<li className="widgetSmListItem" key={user._id}>
						<img src={user.img || "https://static.vecteezy.com/system/resources/previews/001/840/618/large_2x/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg"} alt="" className="widgetSmImg" />
						<div className="widgetSmUser">
							<span className="widgetSmUsername">{user.username}</span>
							<span className="widgetSmUserTitle">{user.email}</span>
						</div>
						<button className="widgetSmButton">
							<Visibility className="widgetSmIcon" />
							Display
						</button>
					</li>
				))}
			</ul>
		</div>
	)
}
