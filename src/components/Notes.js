import React from 'react';

export function Notes(props) {

	const { state, setState } = props;
	const { notes } = state;

	function handleChange(event) {

		const stateMessageValue = state.stateMessage || {};
		stateMessageValue.notes = event.target.value;

		return setState({...state,
			notes: event.target.value,
			stateMessage: stateMessageValue});
	}

	return (
	<>
		<label htmlFor='notes'>Notes</label>
		<textarea
			id='notes'
			name='notes'
			placeholder='Notes'
			value={notes}
			onChange={handleChange}
		/>
	</>
	)
}