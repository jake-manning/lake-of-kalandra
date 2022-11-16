import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import InputTablet from './InputTablet';
import SolutionTablet from './SolutionTablet';
import SolveButton from './SolveButton';
import ResetButton from './ResetButton';

const App = () => {
  const [tilesToAdd, setTilesToAdd] = useState(0);
  const [tilesToSwap, setTilesToSwap] = useState(0);
  const [solution, setSolution] = useState([[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]);
  const [tablet, setTablet] = useState([[0, 0, 1, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]);

  const inputTileClickHandler = (e) => {
    let id = e.currentTarget.id;
    let tile = document.getElementById(id);
    if (tile.classList.contains('active')) {
      tile.classList.remove('active');
    } else if (!tile.classList.contains('active')) {
      tile.classList.add('active');
    }
  };

  const resetButtonClickHandler = () => {
    setSolution([[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]);
    setTablet([[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]);
  }

  return (
    <div>
      <h1>Lake of Kalandra Tablet Solver</h1>
      <div className="tablets">
        <InputTablet tablet={tablet} tileClickHandler={inputTileClickHandler}/>
        <SolutionTablet solution={solution} />
      </div>
      <div className="button-container">
        <SolveButton />
        <ResetButton clickHandler={resetButtonClickHandler}/>
      </div>
    </div>
  )
};

export default App;