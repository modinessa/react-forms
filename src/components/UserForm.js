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

export function getInitialValues() {
	return {
		firstName: '',
		lastName: '',
		age: '',
		employed: false,
		favoriteColor: '',
		sauces: [],
		bestStooge: 'larry',
		notes: '',
	};
}

export function isInitialState(state) {
	return sameObject(state, getInitialValues());
}

function sameObject(obj1, obj2) {
	for (const [key, value] of Object.entries(obj1)) {
		if (typeof value === 'object' && !sameObject(value, obj2[key])) {
			return false;
		}
		else if (Array.isArray(value) && !sameArray(value, obj2[key])) {
			return false;
		}
		else if (value !== obj2[key]) {
			return false;
		}
	}
	return true;
}

function sameArray(arr1, arr2) {
	// Checks only length of arrays as it is enough for the case.
	if (arr1.length !== arr2.length) {
		return false;
	}
}

export function UserForm() {
	const [state, setState] = useState({...getInitialValues()});

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
			<ViewState state={state}/>
		</>
	)
}
