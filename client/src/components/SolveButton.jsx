import React from 'react';

const SolveButton = ({ clickHandler }) => {
  return (
    <button onClick={() => clickHandler()}>KRANGLE</button>
  )
};

export default SolveButton;