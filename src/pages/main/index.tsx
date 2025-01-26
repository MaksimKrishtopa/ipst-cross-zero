import { ReactNode } from "react";
import BoardWidget from "@/widget/board";
import styles from "./styles.module.scss";
import { useGameContext } from "@/shared/store";
import TaskDescription from "@/widget/task";

const MainPage = (): ReactNode => {
	const {winner, moveCount, board, setBoard, setWinner, setCurrentPlayer, setMoveCount} = useGameContext();
	const isDraw = board.every((cell) => cell.player !== null) && !winner;

	const resetGame = (): void => {
		setBoard(Array.from({length: 9}, (_, id) => ({id, player: null})));
		setWinner(null);
		setCurrentPlayer("X");
		setMoveCount(0); 
	};

	return (
		<main className={styles.page}>
			{winner && <h1 className="text-4xl">Игрок {winner} победил!</h1>}
			{isDraw && <h1 className="text-4xl">Ничья!</h1>}

			<p>Ходы: {moveCount}</p>

			{(winner || isDraw) && (
				<button
					className="px-6 py-2 bg-blue-600" onClick={resetGame}>
					Новая игра
				</button>
			)}

			<BoardWidget />

			{/* Описание задания */}
			<TaskDescription />
		</main>
	);
};


export default MainPage;