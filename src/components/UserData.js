import React from 'react';

export function UserData(props) {

	const { state, setState } = props;
	const { firstName, lastName, age } = state;

	
	function handleChange(event) {
		return setState({...state, [event.target.name]: event.target.value});
	}

	return (
		<>
			<div className='data-row'>
				<label htmlFor='firstName' className='title-column'>
					First Name
				</label>
				<input className='data-column'
							 type='text'
							 id='firstName'
							 name='firstName'
							 placeholder='First Name'
							 value={firstName}
							 onChange={handleChange}/>
			</div>

			<div className='data-row'>
				<label htmlFor='lastName' className='title-column'>
					Last Name
				</label>
				<input className='data-column'
					 		 type='text'
					  	 id='lastName'
							 name='lastName'
							 placeholder='Last Name'
							 value={lastName}
							 onChange={handleChange}/>
			</div>

			<div className='data-row'>
				<label htmlFor='age' className='title-column'>
					Age
				</label>
				<input className='data-column'
							 type='text'
							 id='age'
							 name='age'
							 placeholder='Age'
							 value={age}
							 onChange={handleChange}/>
			</div>
		</>
	)
}