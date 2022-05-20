import React from 'react';
import { initialValues } from './UserForm';

export function SubmitButton(props) {

	function handleSubmit() {
		console.log(props.state);
	}

	return (
		<button id='submitBtn'
		 				className='submit-button action-button'
						type='submit'
						disabled={props.state == initialValues}
						onClick={handleSubmit}>
			Submit
		</button>
	)
}