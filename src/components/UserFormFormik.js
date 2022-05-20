import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
 
const validationSchema = Yup.object().shape({
  firstName: Yup.string()
		.min(2, 'Too Short!')
		.max(50, 'Too Long!')
		.required('Required'),
  lastName: Yup.string()
		.min(2, 'Too Short!')
		.max(50, 'Too Long!')
		.required('Required'),
	age: Yup.number()
		.positive()
		.integer()
		.lessThan(100)
		.required('Required'),
	note: Yup.number()
		.required('Required'),
 });

 const	initialValues = {
	 firstName: '',
	 lastName: '',
	 age: '',
	 employed: '',
	 favoriteColor: '',
	 sauces: [],
	 bestStooge: '',
	 notes: ''
	 };

const onSubmit = (values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
				}
 
 export function UserFormFormik () {

	return(
		<Formik
			initialValues={initialValues}
    	validationSchema={validationSchema}
			onSubmit={onSubmit}>
			<Form>
				<label htmlFor='firstName'>
					First Name
				</label>
				<Field
					type='text'
					id='firstName'
					name='firstName'
				/>
				<ErrorMessage name='firstName' />
			 	<br/>

				<label htmlFor='lastName'>
					Last Name
				</label>
				<Field
					type='text'
					id='lastName'
					name='lastName'
				/>
				<ErrorMessage name='lastName' />
			 	<br/>

				<label htmlFor='age'>Age</label>
				<Field
					type='text'
					id='age'
					name='age'
				/>
				<ErrorMessage name='age' />
			 	<br/>

				<label htmlFor='employed'>
					Employed
				</label>
				<Field
					type='checkbox'
					id='employed'
					name='employed'
				/>
				<br/>

				<label htmlFor='favoriteColor'>
					Favorite Color
				</label>
				<Field
					component='select'
					id='favoriteColor'
					name='favoriteColor'
					multiple={true}>

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
				</Field>
				<br/>

				<div role='group' aria-labelledby='checkbox-group'>
					Sauces
					<label>
						<Field
							type='checkbox'
							name='checked'
							value='ketchup'
						/>
						Ketchup
					</label>
					<label>
						<Field
							type='checkbox'
							name='checked'
							value='mustard'
						/>
						Mustard
					</label>
					<label>
						<Field
							type='checkbox'
							name='checked'
							value='Mayonnaise'
						/>
						Mayonnaise
					</label>
					<label>
						<Field
							type='checkbox'
							name='checked'
							value='guacamole'
						/>
						Guacamole
					</label>
				</div>
				<br/>

				<div id='my-radio-group'>Best Stooge</div>
				<div role='group' aria-label='my-radio-group'>
					<label>
						<Field
							type='radio'
							name='picked'
							value='larry'
						/>
						Larry
					</label>
					<label>
						<Field
							type='radio'
							name='picked'
							value='moe'
						/>
						Moe
					</label>
					<label>
						<Field
							type='radio'
							name='picked'
							value='curly'
						/>
						Curly
					</label>
				</div>
				<br/>

				<label htmlFor='notes'>
					Notes
				</label>
				<Field
					as='textarea'
					id='notes'
					name='notes'
					placeholder='Note'
				/>
				<ErrorMessage name='note' />
			 	<br/>



				<button type='submit'>Submit</button>
				<button type='reset'>Reset</button>
			</Form>

		</Formik>
	)
}