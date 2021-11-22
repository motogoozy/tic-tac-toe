import React, { useState } from 'react';
import './Cell.css';
import classNames from 'classnames';
import { PLAYERS } from '../../constants';

export default function Cell({ id, currentPlayer, onSelect }) {
  const [hover, setHover] = useState(false);

  const handleSelection = i => {
    setHover(false);
    onSelect(i);
  };

  const cellClasses = classNames('cell', {
    x: hover && currentPlayer === PLAYERS.X,
    o: hover && currentPlayer === PLAYERS.O,
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
          hover,
        })}
      >
        <div />
        <div />
      </div>
    </div>
  );
}
