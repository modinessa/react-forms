import React from "react";
import { useForm } from "react-hook-form";
import { objToString } from "../js/objToString.js"
import TextareaAutosize from "react-textarea-autosize";

type FormValues = {
	firstName: string,
	lastName: string,
	age: number,
	employed: boolean,
	favoriteColor: string,
	sauces: string[],
	bestStooge: string,
	notes: string,
	viewState: string,
}

export function ReactHookForm() {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors }
	} = useForm<FormValues>({
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
			<div className="data-row">
				<label htmlFor="firstName" className="title-column">
					First Name
				</label>
				<input className={`data-column ${errors.firstName ? "error" : ""}`}
					{...register("firstName",{ required: "Please enter your name!" })}
					placeholder="First Name" />
			</div>

			<div className="data-row">
				<label htmlFor="lastName" className="title-column">
					Last Name
				</label>
				<input className={`data-column ${errors.lastName ? "error" : ""}`}
					{...register("lastName",{ required: "Please enter your last name!" })}
					placeholder="Last Name" />
			</div>

			<div className="data-row">
				<label htmlFor="age" className="title-column">
					Age
				</label>
				<input className={`data-column ${errors.age ? "error" : ""}`}
					type="number"
					{...register("age",{ required: "Please enter your age!",})}
					placeholder="Age" />
			</div>

			<div className="data-row">
				<label htmlFor="employed" className="title-column">
					Employed
				</label>
				<input className="data-column"
					type="checkbox"
					{...register("employed")} />
			</div>

			<div className="data-row">
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
			</div>

			<div className="data-row">
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
			</div>

			<div className="data-row">
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
			</div>

			<div className="data-row">
				<label htmlFor="notes" className="title-column">
					Notes
				</label>
				<textarea className={`data-column ${errors.age ? "error" : ""}`}
					{...register("notes",{ max: 100 })}
					placeholder="Notes" />
			</div>

			<div className="form-actions">
				<input type="submit" className="submit-button action-button" />
				<input type="reset" className="reset-button action-button" />
			</div>

			<TextareaAutosize
				{...register("viewState",{ max: 100 })}
				className="no-scroll"
				value={objToString(watchAllFields)}
				readOnly>
			</TextareaAutosize>

		</form >
	)
}