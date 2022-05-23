import React from 'react';
import { isInitialState, getInitialValues } from './UserForm';

export function ResetButton({setState, state}) {

	function handleReset() {
		return setState({...getInitialValues()});
	}

	return (
		<button id='resetBtn'
						className='action-button'
						disabled={isInitialState(state)}
						onClick={handleReset}>
			Reset
		</button>
	)
}