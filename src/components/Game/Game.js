import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from './GuessInput';
import GuessResults from './GuessResults';
import Banner from './Banner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
	const [guessArray, setGuessArray] = React.useState([]);
	const [gameState, setGameState] = React.useState('playing');
	const [guessCount, setGuessCount] = React.useState(0);

	return (
		<>
			<GuessResults guessArray={guessArray} />
			<GuessInput
				gameState={gameState}
				setGameState={setGameState}
				answer={answer}
				guessArray={guessArray}
				setGuessArray={setGuessArray}
				guessCount={guessCount}
				setGuessCount={setGuessCount}
			/>
			<Banner gameState={gameState} guessCount={guessCount} />
		</>
	);
}

export default Game;
