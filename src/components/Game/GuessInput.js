import React from 'react';

const GuessInput = ({ tentativeGuess, setTentativeGuess, onHandleSubmitAnswer, allowInput = true }) => {
	if (!allowInput) {
		return <p>You win/You loss</p>;
	}

	return (
		<>
			<form onSubmit={onHandleSubmitAnswer} className='guess-input-wrapper'>
				<label htmlFor='guess-input'>Enter guess:</label>
				<input
					minLength={5}
					maxLength={5}
					id='guess-input'
					type='text'
					value={tentativeGuess}
					pattern='[a-zA-Z]{5}'
					title='5 letter word'
					onChange={(e) => setTentativeGuess(e.target.value.toUpperCase())}
				/>
			</form>
		</>
	);
};

export default GuessInput;
