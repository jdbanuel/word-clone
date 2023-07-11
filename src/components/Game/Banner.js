import React from 'react';

function Banner({ gameState, guessCount }) {
	let banner;
	switch (gameState) {
		case 'win':
			banner = (
				<div className="happy banner">
					<p>
						<strong>Congratulations!</strong> Got it in
						<strong> {guessCount} guesses</strong>.
					</p>
				</div>
			);
			break;
		case 'lose':
			banner = (
				<div className="sad banner">
					<p>
						Sorry, the correct answer is <strong>LEARN</strong>.
					</p>
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
