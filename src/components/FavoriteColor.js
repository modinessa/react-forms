import React from 'react';

export function FavoriteColor(props) {

	const { state, setState } = props;
	const { favoriteColor } = state;

	
	function handleChange(event) {
		return setState({...state, [event.target.name]: event.target.value});
	}

	return (
		<div className='data-row'>
			<label htmlFor='favoriteColor' className='title-column'>
				Favorite Color
			</label>
			<select className='data-column'
							id='favoriteColor'
							name='favoriteColor'
							value={favoriteColor}
							onChange={handleChange}>
				<option value='none'></option>
				<option value='red'>
					Red
				</option>
				<option value='green'>
					Green
				</option>
				<option value='blue'>
					Blue
				</option>
				<option value='purple'>
					Purple
				</option>
				<option value='black'>
					Black
				</option>
				<option value='white'>
					White
				</option>
			</select>
		</div>
	)

}