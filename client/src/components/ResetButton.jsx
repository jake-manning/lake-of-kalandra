import React from 'react';

const ResetButton = ({ clickHandler }) => {
  return (
    <button onClick={() => clickHandler()}>RESET</button>
  )
};

export default ResetButton;