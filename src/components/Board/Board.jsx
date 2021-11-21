import React from 'react';
import './Board.css';
import Cell from '../Cell/Cell';

export default function Board() {
  const renderCells = () => {
    const cells = [];

    for (let i = 0; i < 9; i++) {
      cells.push(<Cell key={i} />);
    }

    return cells;
  };
  return <div className='board'>{renderCells()}</div>;
}
