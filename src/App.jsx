import { useState, useEffect } from 'react';
import './App.css';
import Board from './components/Board/Board';
import { PLAYERS, WINS } from './constants';

function App() {
  const [currentPlayer, setCurrentPlayer] = useState(null);
  const [xSelections, setXSelections] = useState([]);
  const [oSelections, setOSelections] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    setMessage(`Player ${currentPlayer}'s turn`);
  }, [currentPlayer]);

  useEffect(() => {
    // check win
    if (isWin()) {
      setMessage(`Player ${currentPlayer} wins!`.toUpperCase());
    } else if (isTie()) {
      setMessage("It's a tie!");
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
    if (currentPlayer === PLAYERS.O) {
      setXSelections(selections => selections.slice(0, -1));
    } else {
      setOSelections(selections => selections.slice(0, -1));
    }
  };

  const onSelect = id => {
    if (!isAlreadySelected(id)) {
      if (currentPlayer === PLAYERS.X) {
        setXSelections(arr => [...arr, id]);
      } else {
        setOSelections(arr => [...arr, id]);
      }
    }
  };

  return (
    <div className='App'>
      <Board currentPlayer={currentPlayer} onSelect={onSelect} xSelections={xSelections} oSelections={oSelections} />
      <p className={'message'}>{message.toUpperCase()}</p>
      <div className='button-container'>
        <p onClick={undo} className='undo-button'>
          UNDO
        </p>
        <p>RESET</p>
      </div>
    </div>
  );
}

export default App;
