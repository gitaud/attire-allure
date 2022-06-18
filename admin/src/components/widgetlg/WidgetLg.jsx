import React, { useState, useEffect } from 'react';
import { format } from "timeago.js";
import { userRequest } from "../../requestMethods";
import "./WidgetLg.css";

export default function WidgetLg() {
	
	const [orders, setOrders] = useState([]);

	useEffect(() => {
		const getOrders = async () => {
			try {
				const res = await userRequest.get("orders/");
			setOrders(res.data)
			} catch(err) {
				console.log(err);
			}
		};
		getOrders();
	}, []);
	
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
					{ orders.map((order) => (
						<tr className="widgetLgTr" key={order._id}>
							<td className="widgetLgUser">
								<span className="widgetLgName">{order.userId}</span>
							</td>
							<td className="widgetLgDate">{format(order.createdAt)}</td>
							<td className="widgetLgAmount">Ksh {order.amount}</td>
							<td className="widgetLgStatus">
								<Button type={order.status} />
							</td>
						</tr>
					))
					}
				</tbody>
			</table>
		</div>
	)
}
