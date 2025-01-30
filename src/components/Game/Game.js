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
	const [tentativeGuess, setTentativeGuess] = React.useState('');
	const [guessList, setGuessList] = React.useState([]);

	const onHandleSubmitAnswer = (e) => {
		e.preventDefault();
		console.log({ guess: tentativeGuess.toUpperCase() });

		const nextGuess = {
			value: tentativeGuess,
		};
		console.log('nextGuess', nextGuess);

		const newGuessList = [...guessList, nextGuess];
		console.log('newGuessList', newGuessList);
		setGuessList(newGuessList);
		setTentativeGuess('');
	};

	return (
		<>
			<b>Welcome to Wordle bruh</b>
			<Guesses guessList={guessList} />
			<GuessInput
				tentativeGuess={tentativeGuess}
				setTentativeGuess={setTentativeGuess}
				onHandleSubmitAnswer={onHandleSubmitAnswer}
			/>
		</>
	);
}

export default Game;
