import { useState } from "react";
import "../../Game.css";
import Board from "../Board";
import { getWinner } from "./helper.js";

function Game() {
	const [gridArray, setGridArray] = useState(Array(9).fill(null));
	const winner = getWinner(gridArray);

	const [turn, setTurn] = useState(true);

	const playerSymbol = turn ? "X" : "O";

	const handleSquareClick = (index) => {
		if (winner || gridArray[index]) {
			return;
		}
		setGridArray([
			...gridArray.slice(0, index),
			playerSymbol,
			...gridArray.slice(index + 1),
		]);

		setTurn(!turn);
	};

	return (
		<div className="Game">
			<div className="boardContainer">
				<Board gridArray={gridArray} handleSquareClick={handleSquareClick} />
			</div>
		</div>
	);
}

export default Game;
