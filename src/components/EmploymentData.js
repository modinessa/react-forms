import React from 'react';

export function EmploymentData (props) {

	const { state, setState } = props;
	const { employed } = state;

	function handleChange(event) {
		return setState({...state, [event.target.name]: !event.target.value});
	}

	return (
		<>
		<label htmlFor='employed'>
			Employed
		</label>
		<input
			type='checkbox'
			id='employed'
			name='employed'
			checked={employed}
			value={employed}
			onChange={handleChange}
		/>
		<br/>
		</>
	)
}