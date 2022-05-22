import React from "react";

export function CheckBox({ register, name, title, ...rest }) {
  return (
		<div className="data-row">
			<label htmlFor={name} className="title-column">
				{title}
			</label>
			<input className="data-column"
				type="checkbox"
				{...register(name)} {...rest} />
		</div>
		)
	}
