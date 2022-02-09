import { useState } from "react";
import "../../Game.css";
import Board from "../Board";

function Game() {
	const [grid, setGrid] = useState(["X", "O", "X", "X", "X", "", "X", "", ""]);
	const [turn, setTurn] = useState("X");
	return (
		<div className="Game">
			<div className="boardContainer">
				<Board grid={grid} />
			</div>
		</div>
	);
}

export default Game;
