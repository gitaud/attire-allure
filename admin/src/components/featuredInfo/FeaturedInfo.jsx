import React, {useState, useEffect } from 'react';
import { ArrowDownward, ArrowUpward } from '@material-ui/icons';
import { userRequest } from '../../requestMethods';
import "./FeaturedInfo.css";

export default function FeaturedInfo() {

	const [income, setIncome ] = useState([]);
	const [percentage, setPercentage] = useState(0);

	useEffect(() => {
		const getIncome = async () => {
			try {
				const res = await userRequest.get("orders/income");
				setIncome(res.data);
				setPercentage((res.data[1].total / res.data[0].total) * 100)
			} catch(err) {
				console.log(err);
			}
		}
		getIncome(); 
	}, []);

	return (
		<div className="featured">
			<div className="featuredItem">
				<span className="featuredTitle">Revenue</span>
				<div className="featuredMoneyContainer">
					<span className="featuredMoney">Ksh { income.length > 1 ? income[1].total : 0 }</span>
					<span className="featuredMoneyRate">{ Math.floor(percentage) } % { percentage > 0 ? <ArrowUpward className='featuredIcon' /> : <ArrowDownward className="featuredIcon negative" />}</span>
				</div>
				<span className="featuredSub">Compared to last month</span>
			</div>
			<div className="featuredItem">
				<span className="featuredTitle">Costs</span>
				<div className="featuredMoneyContainer">
					<span className="featuredMoney">Ksh 11,300</span>
					<span className="featuredMoneyRate">Ksh 850<ArrowUpward className='featuredIcon' /></span>
				</div>
				<span className="featuredSub">Compared to last month</span>
			</div>
			<div className="featuredItem">
				<span className="featuredTitle">Profit</span>
				<div className="featuredMoneyContainer">
					<span className="featuredMoney">Ksh 9,100</span>
					<span className="featuredMoneyRate">Ksh 350<ArrowUpward className='featuredIcon' /></span>
				</div>
				<span className="featuredSub">Compared to last month</span>
			</div>
		</div>
	);
}
