import React from "react";
import Square from "../Square";

function Board({ gridArray, handleSquareClick }) {
	return (
		<>
			{gridArray.map((value, index) => (
				<Square
					value={value}
					handleSquareClick={() => handleSquareClick(index)}
				/>
			))}
		</>
	);
}

export default Board;
