import React from 'react';

export function ViewState(props) {

	console.log(props.state);
	//<script>
	//		{const canvas = document.getElementById("my-canvas");
	//		const context = canvas.getContext("2d");
	//		context.fillText(props)}
	//	</script>

	return (
		<>
		<canvas
			id='viewState'
			width='200'
			height='100'
			style={{backgroundColor: 'lightgray' }}>
		</canvas>
		</>
	)
}
