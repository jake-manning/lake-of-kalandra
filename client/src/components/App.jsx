import React, { useState } from 'react';
import SolutionTablet from './SolutionTablet';
import InputTablet from './InputTablet';

const App = () => {
  const [tilesToAdd, setTilesToAdd] = useState(0);
  const [tilesToSwap, setTilesToSwap] = useState(0);
  const [solution, setSolution] = useState([[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]);
  const [tablet, setTablet] = useState([[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]);

  return (
    <div>
      <h1>Lake of Kalandra Tablet Solver</h1>
      <div className="tablets">
        <InputTablet tablet={tablet} />
        <SolutionTablet solution={solution} />
      </div>
    </div>
  )
};

export default App;