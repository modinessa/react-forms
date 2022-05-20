import React from 'react';

export function Sauces(props) {

	const { state, setState } = props;
	const saucesSet = state.sauces || [];
	
	function handleChange(event) {
		if(event.target.checked) {
			saucesSet.push(event.target.value);
		} else {
			const index = saucesSet.indexOf(event.target.value)
			if (index > -1) {
				saucesSet.splice(index, 1);
			}
		}

		return setState({...state, sauces: saucesSet});
	}
	
	return (
		<>
			<div>Sauces</div>
			<div role='group' aria-labelledby='checkbox-group'>
					<input 
						type='checkbox'
						name='ketchup'
						value='ketchup'
						onChange={handleChange}
						/>
				<label htmlFor='ketchup'>Ketchup</label>
				
					<input
						type='checkbox'
						name='checked'
						value='mustard'
						onChange={handleChange}
						/>
				<label htmlFor='mustard'>Mustard</label>
				
					<input
						type='checkbox'
						name='checked'
						value='mayonnaise'
						onChange={handleChange}
						/>
				<label htmlFor='mayonnaise'>Mayonnaise</label>
			
					<input
						type='checkbox'
						name='checked'
						value='guacamole'
						onChange={handleChange}
						/>
				<label htmlFor='guacamole'>Guacamole</label>
			</div>
		</>
	)
}