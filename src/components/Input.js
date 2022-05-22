import React from "react";

export function Input({ register, name, title, errors, ...rest }) {

  return (
		<div className="data-row">
				<label htmlFor={name} className="title-column">
					{title}
				</label>
				<input

//TODO  implement errors handling
					className={`data-column ${errors.name ? "error" : ""}`}
					{...register(name)} {...rest}
					placeholder={title}/>
			</div>
	)
}
