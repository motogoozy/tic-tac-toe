import { useState } from 'react';
import './App.css';
import Board from './components/Board/Board';
import { PLAYERS } from './constants';

function App() {
  const [currentPlayer, setCurrentPlayer] = useState(PLAYERS.X);

  return (
    <div className='App'>
      <Board currentPlayer={currentPlayer} />
    </div>
  );
}

export default App;
