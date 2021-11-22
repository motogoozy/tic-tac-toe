import { useState } from 'react';
import './App.css';
import Board from './components/Board/Board';
import { PLAYERS } from './constants';

function App() {
  const [currentPlayer, setCurrentPlayer] = useState(PLAYERS.X);
  const [xSelections, setXSelections] = useState([]);
  const [oSelections, setOSelections] = useState([]);

  const onSelect = id => {
    if (currentPlayer === PLAYERS.X) {
      setXSelections(arr => [...arr, id]);
    } else {
      setOSelections(arr => [...arr, id]);
    }
  };

  return (
    <div className='App'>
      <Board currentPlayer={currentPlayer} onSelect={onSelect} xSelections={xSelections} oSelections={oSelections} />
    </div>
  );
}

export default App;
