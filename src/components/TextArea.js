import React from "react";

export function TextArea({ register, name, title, errors, ...rest }) {

  return (
		<div className="data-row">
	<label htmlFor={name} className="title-column">
		{title}
	</label>

{/*TODO  implement errors handling*/}
	<textarea className={`data-column ${errors.notes ? "error" : ""}`}
		{...register(name)} {...rest}
					placeholder={title}/>
</div>
	)
}
