import React from 'react';
import { initialValues } from './UserForm';

export function ResetButton(props) {

	const { setState } = props;

	function handleReset() {
		return setState(initialValues);
	}

	return (
		<button
			id='resetBtn'
			onClick={handleReset}
		>
			Reset
		</button>
	)
}