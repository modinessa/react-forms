import React from 'react';
import { isInitialState } from './UserForm';

export function SubmitButton({state}) {

	function handleSubmit() {
		console.log(state);
	}

	return (
		<button id='submitBtn'
		 				className='submit-button action-button'
						type='submit'
						disabled={isInitialState(state)}
						onClick={handleSubmit}>
			Submit
		</button>
	)
}