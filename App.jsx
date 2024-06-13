import { useState } from "react"
import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import Log from './components/Log'
import GameOver from "./components/GameOver"
import { WINNING_COMBINATIONS } from "./winning-combinations"


const initialGameBoard = [
  [null,null,null],
  [null,null,null],
  [null,null,null]
];

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const[activePlayer, setActivePlayer] = useState('X');

  let gameBoard = [...initialGameBoard.map(array => [...array])];
    for (const turn of gameTurns) {
        const {square, player } = turn;
        const{ row, col } = square;
        gameBoard[row] [col] = player;
    } 
    let winner ;
for (const combination of WINNING_COMBINATIONS) {
  const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column]
  const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column]
  const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column]

  if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
    winner = firstSquareSymbol;
 
  }
}

const hasdraw = gameTurns.length == 9 && !winner ;
  function handleSelectSquare(rowIndex, colIndex) {
    setActivePlayer((currActivePlayer) => currActivePlayer === 'X' ? 'O' : 'X')
    setGameTurns(prevTurns => {
      let currentPlayer = 'X';
      if (prevTurns.length > 0 && prevTurns[0].player === 'X') {
        currentPlayer = 'O';
      }
      const updatedTurns = [
        {square: {row : rowIndex, col: colIndex}, player : activePlayer},
        ...prevTurns
      ];
      return updatedTurns;
    });
  }

  function handleRestart() {
    setGameTurns([]);
  }
  return (
    <menu>
    <div id="game-container">
      <ol id="players" className="highlight-player">
        <Player initialName = "Player 1" symbol = "X" isActivePlayer={activePlayer === 'X'} />
        <Player initialName = "Player 2" symbol = "O" isActivePlayer={activePlayer === 'O'} />
      </ol>
      {(winner || hasdraw) && <GameOver onRestart = {handleRestart} winner={winner}/>}
      <GameBoard onSelectSquare = {handleSelectSquare} board={gameBoard} />
    </div>
    <Log turns={gameTurns}/>
    </menu>
  )
}

export default App
