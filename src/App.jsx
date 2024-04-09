import Player from "./components/Player.jsx";
import {useState} from "react";
import GameBoard from "./components/GameBoard.jsx";

function App() {
    const [player1, setPlayer1] = useState();
    const [player2, setPlayer2] = useState();

    return (
        <main>

            <div id="game-container">
                <ol id="players">
                    <Player initialName='Player 1' symbol='X'></Player>
                    <Player initialName='Player 2' symbol='O'></Player>
                </ol>
                PLAYERS

                <GameBoard/>
            </div>

            LOG
        </main>
    )
}

export default App
