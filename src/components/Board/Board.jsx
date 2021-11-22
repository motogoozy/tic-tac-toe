import './Board.css';
import Cell from '../Cell/Cell';

export default function Board({ currentPlayer, onSelect, xSelections, oSelections, gameOver }) {
  const renderCells = () => {
    const cells = [];

    for (let i = 0; i < 9; i++) {
      const xSelected = xSelections.includes(i);
      const oSelected = oSelections.includes(i);

      cells.push(
        <Cell
          key={i}
          id={i}
          currentPlayer={currentPlayer}
          onSelect={onSelect}
          xSelected={xSelected}
          oSelected={oSelected}
          gameOver={gameOver}
        />
      );
    }

    return cells;
  };
  return <div className='board'>{renderCells()}</div>;
}
