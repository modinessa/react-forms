import React from "react";
import { firstLetterToUpperCase } from "../js/firstLetterToUpperCase.js";

export function CheckGroup({ register, options, name, title, ...rest }) {
  return (
		<div className="data-row">
			<div className="title-column">Sauces</div>
			<div role="group"
				aria-labelledby="checkbox-group"
				className="data-column data-column-choice">
				
					{options.map((value) => (
						<div>
							<input type="checkbox"
										{...register(name)} {...rest}
										key={value.key}
										value={value.val} />
							<label htmlFor={name}>
								{firstLetterToUpperCase(value.val)}
							</label>
						</div>
					))}
				
			</div>
		</div>
  );
}


