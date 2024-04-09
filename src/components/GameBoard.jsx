import React, { useState } from "react";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

export default function GameBoard() {
    const [gameBoard, setGameBoard] = useState(initialGameBoard);
    const [value, setCellValue] = useState('X');
    const [gameIsOver, setGameIsOver] = useState(false);

    function onButtonClicked(rowIndex, colIndex) {
        const cellValue = gameBoard[rowIndex][colIndex];

        if (cellValue === null && !gameIsOver) {
            const newValue = value === 'O' ? 'X' : 'O';
            setCellValue(newValue);
            const updatedGameBoard = gameBoard.map((row, i) =>
                i === rowIndex
                    ? row.map((cell, j) => (j === colIndex ? newValue : cell))
                    : row
            );
            setGameBoard(updatedGameBoard);
            printGameBoard();
        }
    }

    function printGameBoard() {
        console.log(gameBoard[0][0]);
        console.log(gameBoard[1][1]);
        console.log(gameBoard[2][2]);
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
