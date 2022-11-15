import React, { useEffect, useState } from 'react';
import Solution from './Solution';
import Tablet from './Tablet';

const App = () => {
  const [solution, setSolution] = useState([[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]);
  const [tablet, setTablet] = useState([[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]);

  return (
    <div>
      <h1>Lake of Kalandra Tablet Solver</h1>
      <Tablet tablet={tablet} />
      <Solution solution={solution} />
    </div>
  )
};

export default App;