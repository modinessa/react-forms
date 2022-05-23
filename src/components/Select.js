import React from "react";
import { firstLetterToUpperCase } from "../js/firstLetterToUpperCase.js";

export function Select({ register, options, name, title, ...rest }) {
  return (
		<div className="data-row">
			<label htmlFor={name} className="title-column">
				{title}
			</label>
			<select className="data-column" {...register(name)} {...rest}>
				{options.map((value) => (
					<option key={value.key} value={value.val}>
						{firstLetterToUpperCase(value.val)}	
					</option>
				))}
			</select>
		</div>
  );
}