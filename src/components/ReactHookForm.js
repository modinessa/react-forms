import React from "react";
import { useForm } from "react-hook-form";
import { objToString } from "../js/objToString.js";
import { createKeys } from "../js/createKeys.js";
import { deepEqual } from "../js/deepEquality.js";
import TextareaAutosize from "react-textarea-autosize";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Input } from "./Input.js";
import { Select } from "./Select.js";
import { CheckBox } from "./CheckBox.js";
import { CheckGroup } from "./CheckGroup.js";
import { RadioButtons } from "./RadoiButtons.js";
import { TextArea } from "./TextArea.js";

const schema = yup.object({
  firstName: yup.string().matches(/^[A-Za-z\s]+$/i),
  lastName: yup.string().matches(/^[A-Za-z\s]+$/i),
  age: yup.number().positive().integer(),
	notes: yup.string().max(100)
});

export function ReactHookForm() {
	const {
		register,
		handleSubmit,
		reset,
		watch,
		formState: { errors }
	} = useForm({
		resolver: yupResolver(schema),
		defaultValues: {
			employed: false,
			bestStooge: "larry",
			sauces: [],
		}
	});
	
	let currentData = {};
	const favoriteColor = createKeys(["", "red", "green", "blue", "black"]);
	const sauces = createKeys(["ketchup", "mustard", "mayonnaise", "guacamole"]);
	const bestStooge = createKeys(["larry", "moe", "curly"]);

	const watchAllFields = watch();
	const onSubmit = (data) => {
		currentData = {...data};
		alert(objToString(data));
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>

			<Input name="firstName"
						title="First Name"
						register={register}
						errors={errors}/>
			<Input name="lastName"
						title="Last Name" 
						register={register}
						errors={errors} />
			<Input name="age"
						title="Age" 
						register={register}
						errors={errors} />

			<CheckBox name="employed" title="Employed" register={register}/>

			<Select name="favoriteColor" title="Favorite Color" register={register} 								options={favoriteColor}/>

			<CheckGroup name="sauces" title="Sauces" register={register} 
									options={sauces}/>

			<RadioButtons name="bestStooge" title="BestStooge" register={register}
										options={bestStooge}/>

			<TextArea name="notes" title="Notes" register={register} errors={errors}/>


			<div className="form-actions">
				<input type="submit" className="submit-button action-button"/>

				<input type="reset" className="reset-button action-button"
							onClick={() => reset(
								{ firstName: '',
									lastName: '',
									age: '',
									employed: false,
									favoriteColor: '',
									sauces: [],
									bestStooge: 'larry',
									notes: ''
							}
							) }/>
			</div>

			<TextareaAutosize
				{...register("viewState")}
				className="no-scroll"
				value={objToString(watchAllFields)}
				readOnly>
			</TextareaAutosize>

		</form >
	)
}