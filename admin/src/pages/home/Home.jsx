import React from 'react';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import Chart from '../../components/chart/Chart';
import WidgetLg from '../../components/widgetlg/WidgetLg';
import WidgetSm from '../../components/widgetsm/WidgetSm';
import { userData } from "../../dummyData"
import './Home.css';

export default function Home() {
	return (
		<div className='home'>
			<FeaturedInfo />
			<Chart data={userData} title="UserAnalytics" dataKey="Active Users" grid={true} />
			<div className="homeWidgets">
				<WidgetSm />
				<WidgetLg />
			</div>
		</div>
	)
}
