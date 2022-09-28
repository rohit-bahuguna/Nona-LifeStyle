import react from 'react';
import ExpenseType from './ExpenseType';
import ProgressBar from './ProgressBar';

const Card = () => {
	const data = [
		{ item: 'food', price: 40, color: '#FFB800', radiusLeft: 5 },
		{ item: 'shopping', price: 20, color: '#1BA493' },
		{ item: 'movie', price: 10, color: '#E44816', radiusRight: 5 }
	];
	let totalSpand = 0;
	data.map((value, index) => (totalSpand = totalSpand + value.price));
	return (
		<div className="container">
			<div className="main">
				<h3>Your Total Spand</h3>

				<select name="select" className="select">
					<option value="">This Month</option>
					<option value="">Last Month</option>
				</select>
			</div>
			<div className="total">
				<span>SAR</span>
				<span>
					{totalSpand}
				</span>
			</div>
			<ProgressBar bgcolor="white" progress="100" data={data} />
			<div className="bar">
				{data.map((value, index) => {
					totalSpand += value.price;
					return (
						<ExpenseType
							key={value.item + index}
							type={value.item}
							color={value.color}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Card;
