import React from "react";

export function Select({ register, options, name, title, ...rest }) {
  return (
		<div className="data-row">
			<label htmlFor={name} className="title-column">
				{title}
			</label>
			<select className="data-column" {...register(name)} {...rest}>
				{options.map((value) => (
					<option key={value.key} value={value.val}>
						{value.val.charAt(0).toUpperCase() + value.val.slice(1)}	
					</option>
				))}
			</select>
		</div>
  );
}