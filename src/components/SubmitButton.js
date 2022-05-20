import React from 'react';

export function SubmitButton(props) {

	function handleSubmit() {
		console.log(props.state);
	}

	return (
		<button
			id='submitBtn'
			type='submit'
			onClick={handleSubmit}
		>
			Submit
		</button>
	)
}