import React from 'react';
import { checkGuess, correctLetters } from '../../game-helpers.js';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants.js';

function GuessInput({
	gameState,
	setGameState,
	answer,
	guessArray,
	setGuessArray,
	guessCount,
	setGuessCount,
	letterHistory,
	setLetterHistory,
}) {
	const [userAnswer, setUserAnswer] = React.useState('');

	const inputState = gameState === 'playing' ? false : true;

	function checkUserAnswer(event) {
		event.preventDefault();

		const currentGuess = {
			guess: userAnswer,
			guessId: `guess-${Math.random()}`,
		};

		const result = checkGuess(userAnswer, answer);

		currentGuess['letterStatus'] = result;
		setGuessArray([...guessArray, currentGuess]);

		const nextLetterHistory = letterHistory;

		result.forEach(({ letter, status }) => {
			if (!nextLetterHistory.hasOwnProperty(letter)) {
				nextLetterHistory[letter] = status;
			}
		});

		setLetterHistory(nextLetterHistory);

		const nextGuessCount = guessCount + 1;
		setGuessCount(nextGuessCount);

		setUserAnswer('');

		const correctArray = result.filter(correctLetters);

		if (
			correctArray.length !== 5 &&
			nextGuessCount === NUM_OF_GUESSES_ALLOWED
		) {
			setGameState('lose');
		}

		if (correctArray.length === 5) {
			setGameState('win');
		}
	}

	return (
		<form className="guess-input-wrapper" onSubmit={checkUserAnswer}>
			<label htmlFor="guess-input">Enter guess:</label>
			<input
				disabled={inputState}
				id="guess-input"
				type="text"
				pattern="[a-zA-Z]{5}"
				title="5 letter word"
				value={userAnswer}
				onChange={(event) => {
					setUserAnswer(event.target.value.toUpperCase());
				}}
			/>
		</form>
	);
}

export default GuessInput;
