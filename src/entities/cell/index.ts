import {useGameContext} from "@/shared/store";
import {ICell} from "@/shared/interfaces";

const useCellUseCase = () => {
	const {board, setBoard, currentPlayer, setCurrentPlayer, winner, moveCount, setMoveCount} = useGameContext();

	const handleCellClick = (cell: ICell): void => {
		if (winner) return;
		if (cell.player) return;

		const updatedBoard = board.map((boardCell) =>
			boardCell.id === cell.id ? {...boardCell, player: currentPlayer} : boardCell
		);
		setBoard(updatedBoard);

		setMoveCount(moveCount + 1);

		setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
	};

	return {
		handleCellClick,
	};
};

export {useCellUseCase};
