import React from 'react';
import Letter from './Letter';

function Keyboard({ letterHistory }) {
	const letterArray = [
		['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
		['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
		['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
	];
	return (
		<div className="keyboard">
			{letterArray.map((row, rowIndex) => {
				return (
					<div className="letter-row" key={rowIndex}>
						{row.map((letter, letterIndex) => (
							<Letter
								key={`row-${rowIndex}-letter-${letterIndex}`}
								letter={letter}
								status={letterHistory[letter]}
							></Letter>
						))}
					</div>
				);
			})}
		</div>
	);
}

export default Keyboard;
