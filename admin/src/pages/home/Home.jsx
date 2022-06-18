import React, { useState, useEffect, useMemo } from 'react';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import Chart from '../../components/chart/Chart';
import WidgetLg from '../../components/widgetlg/WidgetLg';
import WidgetSm from '../../components/widgetsm/WidgetSm';
import { userRequest } from '../../requestMethods';
import './Home.css';


export default function Home() {

	const [userStats, setUserStats] = useState([]);

	const MONTHS = useMemo(
		() => [
			"Jan",
			"Feb",
			"Mar",
			"Apr",
			"May",
			"June",
			"July",
			"Aug",
			"Sept",
			"Oct",
			"Nov",
			"Dec"
		],
		[]
	);

	useEffect(() => {
		const getStats = async () => {
			try {
				const res = await userRequest("users/stats");
				res.data.map(item => 
					setUserStats(prev => [
						...prev,
						{name: MONTHS[item._id - 1], "Active Users": item.total}
					])
				);
			} catch(err) {
				console.log(err);
			}
		}
		getStats();
	}, [MONTHS])

	return (
		<div className='home'>
			<FeaturedInfo />
			<Chart data={userStats} title="User Analytics" dataKey="Active Users" grid={true} />
			<div className="homeWidgets">
				<WidgetSm />
				<WidgetLg />
			</div>
		</div>
	)
}
