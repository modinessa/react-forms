import React from 'react';

export function UserData(props) {

	const { state, setState } = props;
	const { firstName, lastName, age } = state;

	
	function handleChange(event) {
		return setState({...state, [event.target.name]: event.target.value});
	}

	return (
		<>
			<label htmlFor='firstName'>
				First Name
			</label>
			<input
				type='text'
				id='firstName'
				name='firstName'
				placeholder='First Name'
				value={firstName}
				onChange={handleChange}
			/>
			<br/>

			<label htmlFor='lastName'>
				Last Name
			</label>
			<input
				type='text'
				id='lastName'
				name='lastName'
				placeholder='Last Name'
				value={lastName}
				onChange={handleChange}
			/>
			<br/>

			<label htmlFor='age'>
				Age
			</label>
			<input
				type='text'
				id='age'
				name='age'
				placeholder='Age'
				value={age}
				onChange={handleChange}
			/>
			<br/>
		</>
	)
}