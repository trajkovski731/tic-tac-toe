import React, {useState} from "react";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

export default function GameBoard() {
    const [gameBoard, setGameBoard] = useState(initialGameBoard);
    const [value, setCellValue] = useState('X');
    const [gameIsOver, setGameIsOver] = useState(false);

    function checkWinner(board) {
        // Check rows
        for (let i = 0; i < 3; i++) {
            if (board[i][0] && board[i][0] === board[i][1] && board[i][0] === board[i][2]) {
                return board[i][0]; // Return the winning symbol
            }
        }

        // Check columns
        for (let i = 0; i < 3; i++) {
            if (board[0][i] && board[0][i] === board[1][i] && board[0][i] === board[2][i]) {
                return board[0][i]; // Return the winning symbol
            }
        }

        // Check diagonals
        if (board[0][0] && board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
            return board[0][0]; // Return the winning symbol
        }
        if (board[0][2] && board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
            return board[0][2]; // Return the winning symbol
        }

        return null; // Return null if no winner
    }



    function onButtonClicked(rowIndex, colIndex) {
        const cellValue = gameBoard[rowIndex][colIndex];

        if (cellValue === null && !gameIsOver) {
            setCellValue(prevValue => prevValue === 'O' ? 'X' : 'O');
            const updatedGameBoard = gameBoard.map((row, i) =>
                i === rowIndex
                    ? row.map((cell, j) => (j === colIndex ? value : cell))
                    : row
            );
            setGameBoard(updatedGameBoard);
            let winner = checkWinner(updatedGameBoard);
            if (winner !== null) {
                console.log("Game Over")
                console.log("Winner is " + winner)
                setGameIsOver(true);
            }
        }
    }

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button onClick={() => onButtonClicked(rowIndex, colIndex)}>{playerSymbol}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    );
}
