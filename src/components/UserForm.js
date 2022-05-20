import React, { useState } from 'react';
import { EmploymentData } from './EmploymentData';
import { SubmitButton } from './SubmitButton';
import { UserData } from './UserData';
import { ResetButton } from './ResetButton';
import { FavoriteColor } from './FavoriteColor';
import { Sauces } from './Sauces';
import { BestStooge } from './BestStooge';
import { Notes } from './Notes';
import { ViewState } from './ViewState';

const stateMessage = {};

export const initialValues = {
	firstName: '',
	lastName: '',
	age: '',
	employed: false,
	favoriteColor: '',
	sauces: [],
	bestStooge: 'larry',
	notes: '',
};

 export function UserForm () {
	const [state, setState] = useState(initialValues);

	for(const key in state) {
		if(state[key] !== '') {
			stateMessage[key] = state[key]
		}
	}

	return(
		<>
		<UserData state={state} setState={setState}/>
		<EmploymentData state={state} setState={setState}/>
		<FavoriteColor state={state} setState={setState}/>
		<Sauces state={state} setState={setState}/>
		<BestStooge state={state} setState={setState}/>
		<Notes state={state} setState={setState}/>
		<div className='form-actions'>
			<SubmitButton state={state}/>
			<ResetButton state={state} setState={setState}/>
		</div>
		<ViewState state={stateMessage}/>
		</>
	)
 }