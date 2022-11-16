import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InputTablet from './InputTablet';
import SolutionInfo from './SolutionInfo';
import SolutionTablet from './SolutionTablet';
import SolveButton from './SolveButton';
import ResetButton from './ResetButton';

const App = () => {
  const [account, setAccount] = useState('');
  const [character, setCharacter] = useState('');
  const [tilesToAdd, setTilesToAdd] = useState(-1);
  const [tilesToSwap, setTilesToSwap] = useState(-1);
  const [solution, setSolution] = useState(
    [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]
  );
  const [tablet, setTablet] = useState(
    [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]
  );

  const inputTileClickHandler = (e) => {
    let id = e.currentTarget.id;
    let tile = document.getElementById(id);
    let tabletCopy = [...tablet];
    let rowNumber = Math.floor(id / 5);
    let columnNumber = id % 5;
    if (tile.classList.contains('active')) {
      tile.classList.remove('active');
      tabletCopy[rowNumber][columnNumber] = 0;
      setTablet(tabletCopy);
    } else if (!tile.classList.contains('active')) {
      tile.classList.add('active');
      tabletCopy[rowNumber][columnNumber] = 1;
      setTablet(tabletCopy);
    }
  };

  const submitButtonClickHandler = () => {
    axios.post('http://localhost:3000/solution', {
      "account": account,
      "character": character,
      "tablet": tablet
    })
      .then((res) => {
        setTilesToAdd(res.data.tilesToAdd);
        setTilesToSwap(res.data.tilesToSwap);
        setSolution(res.data.solution);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
  };

  const resetButtonClickHandler = () => {
    setSolution(
      [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]
    );
    setTablet(
      [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]
    );
    setTilesToAdd(-1);
    setTilesToSwap(-1);
  };

  return (
    <div>
      <h1>Lake of Kalandra Tablet Solver</h1>
      <div className="tablet-container">
        <InputTablet tablet={tablet} tileClickHandler={inputTileClickHandler}/>
        <SolutionTablet solution={solution} />
      </div>
      <div className="button-container">
        <SolveButton clickHandler={submitButtonClickHandler}/>
        <ResetButton clickHandler={resetButtonClickHandler}/>
      </div>
      <div className="solution-info-container">
        <SolutionInfo tilesToAdd={tilesToAdd} tilesToSwap={tilesToSwap}/>
      </div>
    </div>
  )
};

export default App;