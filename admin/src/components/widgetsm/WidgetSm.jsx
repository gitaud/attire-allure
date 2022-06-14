import React from 'react';
import { Visibility } from '@material-ui/icons';
import "./WidgetSm.css";

export default function WidgetSm() {
	return (
		<div className="widgetSm">
			<span className="widgetSmTitle">New Members</span>
			<ul className="widgetSmList">
				<li className="widgetSmListItem">
					<img src="https://avatars.githubusercontent.com/u/32839689?v=4" alt="" className="widgetSmImg" />
					<div className="widgetSmUser">
						<span className="widgetSmUsername">Hellen Keller</span>
						<span className="widgetSmUserTitle">Lawyer</span>
					</div>
					<button className="widgetSmButton">
						<Visibility className="widgetSmIcon" />
						Display
					</button>
				</li>
				<li className="widgetSmListItem">
					<img src="https://avatars.githubusercontent.com/u/32839689?v=4" alt="" className="widgetSmImg" />
					<div className="widgetSmUser">
						<span className="widgetSmUsername">Hellen Keller</span>
						<span className="widgetSmUserTitle">Lawyer</span>
					</div>
					<button className="widgetSmButton">
						<Visibility className="widgetSmIcon" />
						Display
					</button>
				</li>
				<li className="widgetSmListItem">
					<img src="https://avatars.githubusercontent.com/u/32839689?v=4" alt="" className="widgetSmImg" />
					<div className="widgetSmUser">
						<span className="widgetSmUsername">Hellen Keller</span>
						<span className="widgetSmUserTitle">Lawyer</span>
					</div>
					<button className="widgetSmButton">
						<Visibility className="widgetSmIcon" />
						Display
					</button>
				</li>
				<li className="widgetSmListItem">
					<img src="https://avatars.githubusercontent.com/u/32839689?v=4" alt="" className="widgetSmImg" />
					<div className="widgetSmUser">
						<span className="widgetSmUsername">Hellen Keller</span>
						<span className="widgetSmUserTitle">Lawyer</span>
					</div>
					<button className="widgetSmButton">
						<Visibility className="widgetSmIcon" />
						Display
					</button>
				</li>
				<li className="widgetSmListItem">
					<img src="https://avatars.githubusercontent.com/u/32839689?v=4" alt="" className="widgetSmImg" />
					<div className="widgetSmUser">
						<span className="widgetSmUsername">Hellen Keller</span>
						<span className="widgetSmUserTitle">Lawyer</span>
					</div>
					<button className="widgetSmButton">
						<Visibility className="widgetSmIcon" />
						Display
					</button>
				</li>
			</ul>
		</div>
	)
}
