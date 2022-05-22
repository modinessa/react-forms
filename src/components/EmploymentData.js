import React from 'react';

export function EmploymentData (props) {

	const { state, setState } = props;
	const { employed } = state;

	function handleChange(event) {
		console.log(event.target);
		return setState({...state, [event.target.name]: event.target.checked});
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
							value={employed}
							onChange={handleChange}/>
	</div>
	)
}