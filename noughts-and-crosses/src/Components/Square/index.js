import React from "react";

function Square({ value, handleSquareClick }) {
	return (
		<div className="squareContainer" onClick={handleSquareClick}>
			<h1>{value}</h1>
		</div>
	);
}

export default Square;
