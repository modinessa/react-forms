import React from "react";

export function TextArea({ register, name, title, errors, ...rest }) {

  return (
		<div className="data-row">
	<label htmlFor={name} className="title-column">
		{title}
	</label>
	<textarea className={`data-column ${errors[name] ? "error" : ""}`}
		{...register(name)} {...rest}
					placeholder={title}/>
</div>
	)
}
