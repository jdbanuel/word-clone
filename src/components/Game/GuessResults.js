import React from 'react';
import EmptyGuessDisplay from './EmptyGuessDisplay';
import GuessDisplay from './GuessDisplay';

function GuessResults({ guessArray }) {
	let guess1 =
		guessArray.length >= 1 ? (
			<GuessDisplay
				letterStatus={guessArray[0].letterStatus}
				guessId={guessArray[0].guessId}
			/>
		) : (
			<EmptyGuessDisplay />
		);
	let guess2 =
		guessArray.length >= 2 ? (
			<GuessDisplay
				letterStatus={guessArray[1].letterStatus}
				guessId={guessArray[1].guessId}
			/>
		) : (
			<EmptyGuessDisplay />
		);
	let guess3 =
		guessArray.length >= 3 ? (
			<GuessDisplay
				letterStatus={guessArray[2].letterStatus}
				guessId={guessArray[2].guessId}
			/>
		) : (
			<EmptyGuessDisplay />
		);
	let guess4 =
		guessArray.length >= 4 ? (
			<GuessDisplay
				letterStatus={guessArray[3].letterStatus}
				guessId={guessArray[3].guessId}
			/>
		) : (
			<EmptyGuessDisplay />
		);
	let guess5 =
		guessArray.length >= 5 ? (
			<GuessDisplay
				letterStatus={guessArray[4].letterStatus}
				guessId={guessArray[4].guessId}
			/>
		) : (
			<EmptyGuessDisplay />
		);
	let guess6 =
		guessArray.length >= 6 ? (
			<GuessDisplay
				letterStatus={guessArray[5].letterStatus}
				guessId={guessArray[5].guessId}
			/>
		) : (
			<EmptyGuessDisplay />
		);

	return (
		<div className="guess-results">
			<p className="guess">{guess1}</p>
			<p className="guess">{guess2}</p>
			<p className="guess">{guess3}</p>
			<p className="guess">{guess4}</p>
			<p className="guess">{guess5}</p>
			<p className="guess">{guess6}</p>
		</div>
	);
}

export default GuessResults;
