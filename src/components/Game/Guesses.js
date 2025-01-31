import React from 'react';

const Guesses = ({ guessList, maxGuesses = 6 }) => {
	const emptyGuesses = maxGuesses - guessList.length;

	return (
		<div className='guess-results'>
			<h2>GUESSES</h2>
			{guessList.map((guess, index) => {
				return (
					<p key={guess.id} className='guess'>
						{guess.value
							.toUpperCase()
							.split('')
							.map((letter, letterIndex) => {
								return (
									<span key={letterIndex} className='cell'>
										{letter}
									</span>
								);
							})}
					</p>
				);
			})}
			{Array(emptyGuesses)
				.fill(0)
				.map((_, index) => {
					return (
						<p key={index} className='guess'>
							{Array(5)
								.fill(0)
								.map((_, letterIndex) => {
									return <span key={letterIndex} className='cell'></span>;
								})}
						</p>
					);
				})}
		</div>
	);
};

export default Guesses;
