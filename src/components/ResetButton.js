import React from 'react';
import { initialValues } from './UserForm';

export function ResetButton(props) {

	const { setState } = props;

	function handleReset() {
		return setState(initialValues);
	}

	return (
		<button id='resetBtn'
						className='action-button'
						disabled={props.state == initialValues}
						onClick={handleReset}>
			Reset
		</button>
	)
}