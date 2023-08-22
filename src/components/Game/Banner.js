import React from 'react';
import Button from './Button';

function Banner({ gameState, guessCount, answer, showButton, handleReset }) {
	let banner;
	let resetButton = (
		<Button
			text="Play Again"
			className={'btn restart'}
			handleOnClick={handleReset}
		/>
	);

	switch (gameState) {
		case 'win':
			banner = (
				<div className="happy banner">
					<p>
						<strong>Congratulations!</strong> Got it in
						<strong> {guessCount} guesses</strong>.
					</p>
					{showButton && resetButton}
				</div>
			);
			break;
		case 'lose':
			banner = (
				<div className="sad banner">
					<p>
						Sorry, the correct answer is <strong>{answer}</strong>.
					</p>
					{showButton && resetButton}
				</div>
			);
			break;
		default:
			banner = <div style={{ display: 'none' }}></div>;
			break;
	}

	return banner;
}

export default Banner;
