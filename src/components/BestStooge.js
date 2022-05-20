import React from 'react';

export function BestStooge(props) {

	const { state, setState } = props;

	function handleChange(event) {

		const stateMessageValue = state.stateMessage || {};
		stateMessageValue.bestStooge = event.target.value;

		return setState({...state,
			bestStooge: event.target.value,
			stateMessage: stateMessageValue});
	}

	return (
		<div className='data-row'>
			<div id='my-radio-group' className='title-column'>
				Best Stooge
			</div>
			<div className='data-column data-column-choice'
					 role='group'
					 aria-label='my-radio-group'
					 defaultChecked={state.bestStooge}>
				<label>
					<input type='radio'
								 name='picked'
								 value='larry'
								 checked={state.bestStooge === 'larry'}
								 onClick={handleChange}/>
					Larry
				</label>
				<label>
					<input type='radio'
								 name='picked'
								 value='moe'
								 checked={state.bestStooge === 'moe'}
								 onClick={handleChange}/>
					Moe
				</label>
				<label>
					<input type='radio'
								 name='picked'
								 value='curly'
								 checked={state.bestStooge === 'curly'}
								 onClick={handleChange}/>
					Curly
				</label>
			</div>
		</div>
	)
}