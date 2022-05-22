import React from "react";
import { useForm } from "react-hook-form";
import { objToString } from "../js/objToString.js"
import TextareaAutosize from "react-textarea-autosize";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Input } from "./Input.js";
import { Select } from "./Select.js";
import { CheckBox } from "./CheckBox.js";
import { CheckGroup } from "./CheckGroup.js";
import { RadioButtons } from "./RadoiButtons.js";

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
		}
	});

	const watchAllFields = watch();

	return (
		<form onSubmit={handleSubmit((data) => {
			alert(objToString(data));
		})}>

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

			{/*<div className="data-row">
				<label htmlFor="firstName" className="title-column">
					First Name
				</label>
				<input className={`data-column ${errors.firstName ? "error" : ""}`}
					{...register("firstName")}
					placeholder="First Name" />
			</div>

			<div className="data-row">
				<label htmlFor="lastName" className="title-column">
					Last Name
				</label>
				<input className={`data-column ${errors.lastName ? "error" : ""}`}
					{...register("lastName")}
					placeholder="Last Name" />
			</div>

			<div className="data-row">
				<label htmlFor="age" className="title-column">
					Age
				</label>
				<input className={`data-column ${errors.age ? "error" : ""}`}
					type="text"
					{...register("age")}
					placeholder="Age" />
			</div>*/}

			<CheckBox name="employed" title="Employed" register={register}/>

			{/*<div className="data-row">
				<label htmlFor="employed" className="title-column">
					Employed
				</label>
				<input className="data-column"
					type="checkbox"
					{...register("employed")} />
			</div>*/}

			<Select name="favoriteColor" title="Favorite Color" register={register} 								options={[{key: "", val: ""}, {key: "red", val: "red"},
								{key:"green", val: "green"}, {key: "blue", val: "blue"},
								{key: "black", val: "black"}, {key: "purple", val: "purple"}]} />

			{/*<div className="data-row">
				<label htmlFor="favoriteColor" className="title-column">
					Favorite Color
				</label>
				<select className="data-column"
					{...register("favoriteColor")}>
					<option value="none"></option>
					<option value="red">
						Red
					</option>
					<option value="green">
						Green
					</option>
					<option value="blue">
						Blue
					</option>
					<option value="purple">
						Purple
					</option>
					<option value="black">
						Black
					</option>
					<option value="white">
						White
					</option>
				</select>
			</div>*/}

			<CheckGroup name="sauces" title="Sauces" register={register} 
									options={[{key: "ketchup", val: "ketchup"},
										{key: "mustard", val: "mustard"},
										{key: "mayonnaise", val: "mayonnaise"},
										{key: "guacamole", val: "guacamole"}]}/>

			{/*<div className="data-row">
				<div className="title-column">Sauces</div>
				<div role="group"
					aria-labelledby="checkbox-group"
					className="data-column data-column-choice">
					<div>
						<input type="checkbox"
							{...register("sauces")}
							value="ketchup" />
						<label htmlFor="ketchup">Ketchup</label>
					</div>

					<div>
						<input type="checkbox"
							{...register("sauces")}
							value="mustard" />
						<label htmlFor="mustard">Mustard</label>
					</div>

					<div>
						<input type="checkbox"
							{...register("sauces")}
							value="mayonnaise" />
						<label htmlFor="mayonnaise">Mayonnaise</label>
					</div>

					<div>
						<input type="checkbox"
							{...register("sauces")}
							value="guacamole" />
						<label htmlFor="guacamole">Guacamole</label>
					</div>
				</div>
			</div>*/}

			<RadioButtons name="bestStooge" title="BestStooge" register={register}
										options={[{key: "larry", val: "larry"},
										{key: "moe", val: "moe"},
										{key: "curly", val: "curly"}]}/>

			{/*<div className="data-row">
				<div id="my-radio-group" className="title-column">
					Best Stooge
				</div>
				<div className="data-column data-column-choice"
					role="group"
					aria-label="my-radio-group">
					<label>
						<input type="radio"
							{...register("bestStooge")}
							name="bestStooge"
							value="larry" />
						Larry
					</label>
					<label>
						<input type="radio"
							{...register("bestStooge")}
							name="bestStooge"
							value="moe" />
						Moe
					</label>
					<label>
						<input type="radio"
							{...register("bestStooge")}
							name="bestStooge"
							value="curly" />
						Curly
					</label>
				</div>
			</div>*/}

			<div className="data-row">
				<label htmlFor="notes" className="title-column">
					Notes
				</label>
				<textarea className={`data-column ${errors.notes ? "error" : ""}`}
					{...register("notes")}
					placeholder="Notes" />
			</div>

			<div className="form-actions">
				<input type="submit" className="submit-button action-button" />
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