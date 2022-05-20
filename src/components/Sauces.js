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
			<div className='data-row'>
				<div className='title-column'>Sauces</div>
				<div role='group'
						 aria-labelledby='checkbox-group'
						 className='data-column data-column-choice'>
					<div>
						<input type='checkbox'
									name='ketchup'
									value='ketchup'
									onChange={handleChange}/>
						<label htmlFor='ketchup'>Ketchup</label>
					</div>
					
					<div>
						<input type='checkbox'
									name='checked'
									value='mustard'
									onChange={handleChange}/>
						<label htmlFor='mustard'>Mustard</label>
					</div>
					
					<div>
						<input type='checkbox'
										name='checked'
										value='mayonnaise'
										onChange={handleChange}/>
						<label htmlFor='mayonnaise'>Mayonnaise</label>
					</div>
				
					<div>
						<input type='checkbox'
									name='checked'
									value='guacamole'
									onChange={handleChange}/>
						<label htmlFor='guacamole'>Guacamole</label>
					</div>
				</div>
			</div>
		</>
	)
}