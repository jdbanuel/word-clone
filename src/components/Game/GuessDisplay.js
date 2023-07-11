import React from 'react';

function GuessDisplay({ letterStatus, guessId }) {
	return letterStatus.map(({ letter, status }, index) => {
		return (
			<span className={`cell ${status}`} key={`guess-${guessId}-${index}`}>
				{letter}
			</span>
		);
	});
}

export default GuessDisplay;
