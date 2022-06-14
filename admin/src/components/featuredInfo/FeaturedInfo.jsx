import React from 'react';
import { ArrowDownward, ArrowUpward } from '@material-ui/icons';
import "./FeaturedInfo.css";

export default function FeaturedInfo() {
	return (
		<div className="featured">
			<div className="featuredItem">
				<span className="featuredTitle">Revenue</span>
				<div className="featuredMoneyContainer">
					<span className="featuredMoney">Ksh 20,400</span>
					<span className="featuredMoneyRate">Ksh 1,200<ArrowDownward className="featuredIcon negative" /></span>
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
