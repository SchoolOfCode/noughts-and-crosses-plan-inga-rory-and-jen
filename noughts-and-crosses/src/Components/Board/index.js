import React from "react";
import Square from "../Square";

function Board({ grid }) {
	return (
		<>
			{grid.map((value) => (
				<Square value={value} />
			))}
		</>
	);
}

export default Board;
