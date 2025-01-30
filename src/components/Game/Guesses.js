import React from 'react';

const Guesses = ({ guessList }) => {
	return (
		<div className='guess-results'>
			<h2>GUESSES</h2>
			<ul>
				{guessList.map((guess, index) => {
					return (
						<li key={index} className='guess'>
							{guess.value.toUpperCase()}
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Guesses;
