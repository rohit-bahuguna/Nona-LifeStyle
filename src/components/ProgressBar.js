import React from 'react';

const ProgressBar = ({ data }) => {
	const Parentdiv = {
		display: 'flex',
		height: 10,
		width: '100%',
		backgroundColor: 'whitesmoke',
		borderRadius: 40
	};

	return (
		<div style={Parentdiv}>
			{data.map((value, index) => {
				return (
					<Childdiv
						bgcolor={value.color}
						progress={value.price * 3 / 100 * 100}
						height={30}
						radiusLeft={value.radiusLeft}
						radiusRight={value.radiusRight}
					/>
				);
			})}
		</div>
	);
};

const Childdiv = ({ bgcolor, progress, radiusLeft, radiusRight }) => {
	const Childdiv = {
		height: 10,
		width: `${progress}%`,
		backgroundColor: bgcolor,
		borderTopLeftRadius: `${radiusLeft}px`,
		borderBottomLeftRadius: `${radiusLeft}px`,
		borderTopRightRadius: `${radiusRight}px`,
		borderBottomRightRadius: `${radiusRight}px`,
		textAlign: 'right'
	};
	return <div style={Childdiv} />;
};

export default ProgressBar;
