import React from "react";
import { firstLetterToUpperCase } from "../js/firstLetterToUpperCase.js";

export function RadioButtons({ register, options, name, title, ...rest }) {
  return (
		<div className="data-row">
			<div id="my-radio-group" className="title-column">
				{title}
			</div>
			<div className="data-column data-column-choice"
				role="group"
				aria-label="my-radio-group">
				
					{options.map((value) => (
						<label key={value.key}>
							<input type="radio"
											{...register(name)} {...rest}
											value={value.val} />
								{firstLetterToUpperCase(value.val)}
						</label>
					))}
				
			</div>
		</div>
  );
}