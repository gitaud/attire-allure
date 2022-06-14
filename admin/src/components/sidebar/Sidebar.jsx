import React from 'react';
import { 
	LineStyle, 
	Timeline, 
	TrendingUp,
	PermIdentity,
	Storefront, 
	BarChart, 
	MailOutline, 
	DynamicFeed,
	AttachMoney,
	ChatBubbleOutline, 
	WorkOutline, 
	Report
} from '@material-ui/icons';
import "./Sidebar.css";

export default function Sidebar() {
	return(
		<div className="sidebar">
			<div className="sidebarWrapper">
				<div className="sidebarMenu">
					<h2 className="sidebarTitle">Dashboard</h2>
					<ul className="sidebarList">
						<li className="sidebarListItem active">
							<LineStyle className="sidebarIcon" />
							Home
						</li>
						<li className="sidebarListItem">
							<Timeline className="sidebarIcon" />
							Analytics
						</li>
						<li className="sidebarListItem">
							<TrendingUp className="sidebarIcon" />
							Sales
						</li>
					</ul>
				</div>
				<div className="sidebarMenu">
					<h2 className="sidebarTitle">Quick Menu</h2>
					<ul className="sidebarList">
						<li className="sidebarListItem">
							<PermIdentity className="sidebarIcon" />
							Users
						</li>
						<li className="sidebarListItem">
							<Storefront className="sidebarIcon" />
							Products
						</li>
						<li className="sidebarListItem">
							<AttachMoney className="sidebarIcon" />
							Transactions
						</li>
						<li className="sidebarListItem">
							<BarChart className="sidebarIcon" />
							Reports
						</li>
					</ul>
				</div>
				<div className="sidebarMenu">
					<h2 className="sidebarTitle">Notifications</h2>
					<ul className="sidebarList">
						<li className="sidebarListItem">
							<MailOutline className="sidebarIcon" />
							Mail
						</li>
						<li className="sidebarListItem">
							<DynamicFeed className="sidebarIcon" />
							Feedback
						</li>
						<li className="sidebarListItem">
							<ChatBubbleOutline className="sidebarIcon" />
							Messages
						</li>
					</ul>
				</div>
				<div className="sidebarMenu">
					<h2 className="sidebarTitle">Staff</h2>
					<ul className="sidebarList">
						<li className="sidebarListItem">
							<WorkOutline className="sidebarIcon" />
							Manage
						</li>
						<li className="sidebarListItem">
							<Timeline className="sidebarIcon" />
							Analytics
						</li>
						<li className="sidebarListItem">
							<Report className="sidebarIcon" />
							Reports
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}