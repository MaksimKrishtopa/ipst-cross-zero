import { useGameContext } from "@/shared/store";
import { ICell } from "@/shared/interfaces";

const useCellUseCase = () => {
  const { board, setBoard, currentPlayer, setCurrentPlayer, winner } = useGameContext();

  const handleCellClick = (cell: ICell): void => {
    if (winner) {
      console.log("Игра завершена! Победитель:", winner);
      return;
    }

    if (cell.player) {
      console.log("Эта ячейка уже занята");
      return;
    }

    const updatedBoard = board.map((boardCell) =>
      boardCell.id === cell.id ? { ...boardCell, player: currentPlayer } : boardCell
    );

    setBoard(updatedBoard);

    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  };

  return {
    handleCellClick,
  };
};

export {
  useCellUseCase,
};
