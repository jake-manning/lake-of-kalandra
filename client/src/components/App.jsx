import React, { useState } from 'react';
import SolutionTablet from './SolutionTablet';
import InputTablet from './InputTablet';

const App = () => {
  const [solution, setSolution] = useState([[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]);
  const [tablet, setTablet] = useState([[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]);

  return (
    <div>
      <h1>Lake of Kalandra Tablet Solver</h1>
      <InputTablet tablet={tablet} />
      <SolutionTablet solution={solution} />
    </div>
  )
};

export default App;