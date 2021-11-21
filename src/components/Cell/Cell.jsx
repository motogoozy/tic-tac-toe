import React, { useState } from 'react';
import './Cell.css';
import classNames from 'classnames';

export default function Cell() {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={classNames('cell', {
        hover,
      })}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    ></div>
  );
}
