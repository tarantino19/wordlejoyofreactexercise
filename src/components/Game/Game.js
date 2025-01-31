import React from 'react';
import { sample } from '../../utils';
import { WORDS } from '../../data';
import Guesses from './Guesses';
import GuessInput from './GuessInput';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
	const [guess, setGuess] = React.useState('');
	const [guessList, setGuessList] = React.useState([]);

	const onHandleSubmitAnswer = (e) => {
		e.preventDefault();
		console.log({ guess: guess.toUpperCase() });

		if (guessList.length < 6) {
			const nextGuess = {
				value: guess,
				id: Math.random(),
			};
			const newGuessList = [...guessList, nextGuess];
			setGuessList(newGuessList);
			setGuess('');
		}
	};

	const allowInput = guessList.length < 5;

	return (
		<>
			<b>Welcome to Wordle bruh</b>
			<Guesses guessList={guessList} />
			<GuessInput
				tentativeGuess={guess}
				setTentativeGuess={setGuess}
				onHandleSubmitAnswer={onHandleSubmitAnswer}
				allowInput={allowInput}
			/>
		</>
	);
}

export default Game;
