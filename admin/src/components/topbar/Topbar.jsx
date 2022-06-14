import React from 'react';
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import "./Topbar.css";

export default function Topbar() {
	return(
		<div className='topbar'>
			<div className='topbarWrapper'>
				<div className="topLeft">
					<span className="logo">NdQ Apparel</span>
				</div>
				<div className="topRight">
					<div className="topbarIconContainer">
						<NotificationsNone />
						<span className="topIconBadge">2</span>
					</div>
					<div className="topbarIconContainer">
						<Language />
						<span className="topIconBadge">2</span>
					</div>
					<div className="topbarIconContainer">
						<Settings />
						<span className="topIconBadge">2</span>
					</div>
					<img src="https://avatars.githubusercontent.com/u/32839689?v=4" alt="" className="topAvatar" />
				</div>
			</div>
		</div>
	)
}