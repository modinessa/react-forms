import React from "react";

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
						<label>
							<input type="radio"
											{...register(name)} {...rest}
											key={value.key}
											value={value.val} />
								{value.val.charAt(0).toUpperCase() + value.val.slice(1)}
						</label>
					))}
				
			</div>
		</div>
  );
}