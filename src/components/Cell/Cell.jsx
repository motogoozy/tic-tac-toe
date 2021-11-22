import React, { useState } from 'react';
import './Cell.css';
import classNames from 'classnames';
import { PLAYERS } from '../../constants';

export default function Cell({ id, currentPlayer, onSelect, xSelected, oSelected, gameOver }) {
  const [hover, setHover] = useState(false);

  const handleSelection = i => {
    setHover(false);
    onSelect(i);
  };

  const isSelected = xSelected || oSelected;

  const cellClasses = classNames('cell', {
    x: xSelected || (!isSelected && hover && currentPlayer === PLAYERS.X && !gameOver),
    o: oSelected || (!isSelected && hover && currentPlayer === PLAYERS.O && !gameOver),
  });

  return (
    <div
      className={cellClasses}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => handleSelection(id)}
    >
      <div
        className={classNames('item-container', {
          hover: hover && !xSelected && !oSelected && !gameOver,
        })}
      >
        <div />
        <div />
      </div>
    </div>
  );
}
