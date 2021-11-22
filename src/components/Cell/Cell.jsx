import React, { useState } from 'react';
import './Cell.css';
import classNames from 'classnames';
import { PLAYERS } from '../../constants';

export default function Cell({ id, currentPlayer, onSelect, xSelected, oSelected }) {
  const [hover, setHover] = useState(false);

  const handleSelection = i => {
    setHover(false);
    onSelect(i);
  };

  const cellClasses = classNames('cell', {
    x: xSelected || (hover && currentPlayer === PLAYERS.X),
    o: oSelected || (hover && currentPlayer === PLAYERS.O),
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
          hover: hover && !xSelected && !oSelected,
        })}
      >
        <div />
        <div />
      </div>
    </div>
  );
}
