import React from 'react';
import { Link } from 'react-router-dom'
import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from "@material-ui/icons"
import "./User.css";

export default function User() {
	return (
		<div className="user">
			<div className="userTitleContainer">
				<h1 className="userTitle">Edit User</h1>
				<Link to="/newUser">
					<button className="userAddButton">
						Create
					</button>
				</Link>
			</div>
			<div className="userContainer">
				<div className="userShow">
					<div className="userShowTop">
						<img src="https://avatars.githubusercontent.com/u/32839689?v=4" alt="" className="userShowImg" />
						<div className="userShowTopTitle">
							<span className="userShowUsername">
								Mr Stepper
							</span>
							<span className="userShowUserTitle">
								Therapist
							</span>
						</div>
					</div>
					<div className="userShowBottom">
						<span className="userShowTitle">Account Details</span>
						<div className="userShowInfo">
							<PermIdentity className="userShowIcon"/>
							<span className="userShowInfoTitle">mrstepper699</span>
						</div>
						<div className="userShowInfo">
							<CalendarToday className="userShowIcon"/>
							<span className="userShowInfoTitle">12.13.2015</span>
						</div>
						<span className="userShowTitle">Contact Details</span>
						<div className="userShowInfo">
							<PhoneAndroid className="userShowIcon"/>
							<span className="userShowInfoTitle">+254 101 234 156</span>
						</div>
						<div className="userShowInfo">
							<MailOutline className="userShowIcon"/>
							<span className="userShowInfoTitle">mrstepper699@gmail.com</span>
						</div>
						<div className="userShowInfo">
							<LocationSearching className="userShowIcon"/>
							<span className="userShowInfoTitle">Kanairo, CBD</span>
						</div>
					</div>
				</div>
				<div className="userUpdate">
					<span className="userUpdateTitle">Edit</span>
					<form className="userUpdateForm">
						<div className="userUpdateLeft">
							<div className="userUpdateItem">
								<label>Username</label>
								<input type="text" placeholder="mrstepper699" className="userUpdateInput" />
							</div>
							<div className="userUpdateItem">
								<label>Full Name</label>
								<input type="text" placeholder="Mr Stepper" className="userUpdateInput" />
							</div>
							<div className="userUpdateItem">
								<label>Email</label>
								<input type="email" placeholder="mrstepper699@gmail.com" className="userUpdateInput" />
							</div>
							<div className="userUpdateItem">
								<label>Phone</label>
								<input type="phone" placeholder="+254 101 234 156" className="userUpdateInput" />
							</div>
							<div className="userUpdateItem">
								<label>Address</label>
								<input type="text" placeholder="Kanairo, CBD" className="userUpdateInput" />
							</div>
						</div>
						<div className="userUpdateRight">
							<div className="userUpdateUpload">
								<label htmlFor="file">
									<Publish className="userUpdateIcon" />
								</label>
								<img src="https://avatars.githubusercontent.com/u/32839689?v=4" alt="" className="userUpdateImg" />
								<input type="file" id="file" style={{display: "none"}}/>
							</div>
							<button className="userUpdateButton">Update</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
