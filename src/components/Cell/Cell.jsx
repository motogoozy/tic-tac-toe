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

  return (
    <div
      className={classNames('cell', {
        x: hover && currentPlayer === PLAYERS.X,
        o: hover && currentPlayer === PLAYERS.O,
        hover,
      })}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => handleSelection(id)}
    ></div>
  );
}
