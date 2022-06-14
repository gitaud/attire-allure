import React from 'react';
import { 
	LineChart, 
	Line, XAxis, 
	CartesianGrid, 
	Tooltip, 
	Legend, 
	ResponsiveContainer 
	} from 'recharts';
import './Chart.css';



export default function Chart({title, data, dataKey, grid}) {
	return (
		<div className="chart">
			<h3 className="chartTitle">{title}</h3>
			<ResponsiveContainer width="100%" aspect={ 4 / 1 }>
				<LineChart data={data}>
					<XAxis dataKey="name" stroke="#5550bd" />
					<Line type="monotone" stroke="#5550bd" dataKey={dataKey} />
					<Tooltip />
					{ grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" /> }
					<Legend />
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
}
