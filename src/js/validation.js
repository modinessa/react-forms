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