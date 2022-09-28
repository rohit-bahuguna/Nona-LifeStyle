import React from 'react';

const ExpenseType = ({ type, color }) => {
	const Type = {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		gap: '0.5vw'
	};

	const food_dot = {
		backgroundColor: color,
		width: '1vw',
		height: '2vh',
		borderRadius: '50%'
	};

	return (
		<div style={Type}>
			<div style={food_dot} />
			<div>
				{type}
			</div>
		</div>
	);
};

export default ExpenseType;
