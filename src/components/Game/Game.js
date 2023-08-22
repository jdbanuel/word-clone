import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from './GuessInput';
import GuessResults from './GuessResults';
import Banner from './Banner';
import Keyboard from './Keyboard';

// // Pick a random word on every pageload.
// const answer = sample(WORDS);
// // To make debugging easier, we'll log the solution in the console.
// console.info({ answer });

function Game() {
	const [guessArray, setGuessArray] = React.useState([]);
	const [gameState, setGameState] = React.useState('playing');
	const [guessCount, setGuessCount] = React.useState(0);
	const [answer, setAnswer] = React.useState(sample(WORDS));
	const [letterHistory, setLetterHistory] = React.useState({});

	function handleOnClickReset() {
		setGuessArray([]);
		setGameState('playing');
		setGuessCount(0);
		setAnswer(sample(WORDS));
		setLetterHistory({});
	}

	const showButton = gameState !== 'playing';

	console.info(answer);

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
				letterHistory={letterHistory}
				setLetterHistory={setLetterHistory}
			/>
			<Keyboard letterHistory={letterHistory}></Keyboard>
			<Banner
				gameState={gameState}
				guessCount={guessCount}
				answer={answer}
				showButton={showButton}
				handleReset={handleOnClickReset}
			/>
		</>
	);
}

export default Game;
