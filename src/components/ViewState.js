import React from 'react';

export function ViewState(props) {

	//<script>
	//		{const canvas = document.getElementById("my-canvas");
	//		const context = canvas.getContext("2d");
	//		context.fillText(props)}
	//	</script>

	return (
		<canvas id='viewState'
						width='500'
						height='100'
						style={{backgroundColor: 'lightgray' }}>
		</canvas>
	)
}
