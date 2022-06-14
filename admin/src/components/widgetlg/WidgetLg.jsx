import React from 'react';
import "./WidgetLg.css";

export default function WidgetLg() {
	const Button = ({type}) => {
		return <button className={"widgetLgButton " + type}>{type}</button>
	}
	return (
		<div className="widgetLg">
			<h3 className="widgetLgTitle">
				Latest Transactions
			</h3>
			<table className="widgetLgTable">
				<thead>
					<tr className="widgetLgTr">
						<th className="widgetLgTh">Customer</th>
						<th className="widgetLgTh">Date</th>
						<th className="widgetLgTh">Amount</th>
						<th className="widgetLgTh">Status</th>
					</tr>
				</thead>
				<tbody>
					<tr className="widgetLgTr">
						<td className="widgetLgUser">
							<img src="https://avatars.githubusercontent.com/u/32839689?v=4" alt="" className="widgetLgImg" />
							<span className="widgetLgName">Ric Flair</span>
						</td>
						<td className="widgetLgDate">2nd June 2022</td>
						<td className="widgetLgAmount">Ksh 2500</td>
						<td className="widgetLgStatus">
							<Button type="Approved" />
						</td>
					</tr>
					<tr className="widgetLgTr">
						<td className="widgetLgUser">
							<img src="https://avatars.githubusercontent.com/u/32839689?v=4" alt="" className="widgetLgImg" />
							<span className="widgetLgName">Ric Flair</span>
						</td>
						<td className="widgetLgDate">2nd June 2022</td>
						<td className="widgetLgAmount">Ksh 2500</td>
						<td className="widgetLgStatus">
							<Button type="Pending" />
						</td>
					</tr>
					<tr className="widgetLgTr">
						<td className="widgetLgUser">
							<img src="https://avatars.githubusercontent.com/u/32839689?v=4" alt="" className="widgetLgImg" />
							<span className="widgetLgName">Ric Flair</span>
						</td>
						<td className="widgetLgDate">2nd June 2022</td>
						<td className="widgetLgAmount">Ksh 2500</td>
						<td className="widgetLgStatus">
							<Button type="Declined" />
						</td>
					</tr>
					<tr className="widgetLgTr">
						<td className="widgetLgUser">
							<img src="https://avatars.githubusercontent.com/u/32839689?v=4" alt="" className="widgetLgImg" />
							<span className="widgetLgName">Ric Flair</span>
						</td>
						<td className="widgetLgDate">2nd June 2022</td>
						<td className="widgetLgAmount">Ksh 2500</td>
						<td className="widgetLgStatus">
							<Button type="Pending" />
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}
