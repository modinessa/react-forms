import React from "react";

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
								{value.val.charAt(0).toUpperCase() + value.val.slice(1)}
							</label>
						</div>
					))}
				
			</div>
		</div>
  );
}


