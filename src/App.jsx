import { useState, useEffect } from 'react';
import './App.css';
import Board from './components/Board/Board';
import { PLAYERS, WINS } from './constants';

function App() {
  const [currentPlayer, setCurrentPlayer] = useState(null);
  const [xSelections, setXSelections] = useState([]);
  const [oSelections, setOSelections] = useState([]);
  const [message, setMessage] = useState('');
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    setMessage(`Player ${currentPlayer}'s turn`);
  }, [currentPlayer]);

  useEffect(() => {
    if (isWin()) {
      setMessage(`Player ${currentPlayer} wins!`);
      setGameOver(true);
    } else if (isTie()) {
      setMessage("It's a tie!");
      setGameOver(true);
    } else {
      switchTurns();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [xSelections, oSelections]);

  const switchTurns = () => {
    setCurrentPlayer(cp => (cp === PLAYERS.X ? PLAYERS.O : PLAYERS.X));
  };

  const isWin = () => {
    const selections = currentPlayer === PLAYERS.X ? xSelections : oSelections;
    return WINS.some(winningCells => winningCells.every(cell => selections.includes(cell)));
  };

  const isTie = () => !isWin() && xSelections.length + oSelections.length === 9;

  const isAlreadySelected = id => xSelections.includes(id) || oSelections.includes(id);

  const undo = () => {
    if (xSelections.length === 0 && oSelections.length === 0) return;

    if (currentPlayer === PLAYERS.O) {
      setXSelections(selections => selections.slice(0, -1));
    } else {
      setOSelections(selections => selections.slice(0, -1));
    }
  };

  const reset = () => {
    setXSelections([]);
    setOSelections([]);
    setCurrentPlayer(null);
    setGameOver(false);
  };

  const onSelect = id => {
    if (gameOver || isAlreadySelected(id)) return;

    if (currentPlayer === PLAYERS.X) {
      setXSelections(arr => [...arr, id]);
    } else {
      setOSelections(arr => [...arr, id]);
    }
  };

  return (
    <div className='App'>
      <Board
        currentPlayer={currentPlayer}
        onSelect={onSelect}
        xSelections={xSelections}
        oSelections={oSelections}
        gameOver={gameOver}
      />
      <p className={'message'}>{message.toUpperCase()}</p>
      <div className='button-container'>
        {!gameOver && (
          <p className='undo-button' onClick={undo}>
            UNDO
          </p>
        )}
        <p className='reset-button' onClick={reset}>
          {gameOver ? 'PLAY AGAIN' : 'RESET'}
        </p>
      </div>
    </div>
  );
}

export default App;
