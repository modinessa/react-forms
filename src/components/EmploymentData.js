import React from 'react';

export function EmploymentData (props) {

	const { state, setState } = props;
	const { employed } = state;

	function handleChange(event) {
		return setState({...state, [event.target.name]: !event.target.value});
	}

	return (
		<div className='data-row'>
			<label htmlFor='employed' className='title-column'>
				Employed
			</label>
			<input className='data-column'
							type='checkbox'
							id='employed'
							name='employed'
							checked={employed}
							value={employed}
							onChange={handleChange}/>
	</div>
	)
}