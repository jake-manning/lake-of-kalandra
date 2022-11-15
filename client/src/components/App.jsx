import React, { useEffect, useState } from 'react';
import Tablet from './Tablet';

const App = () => {
  const [solution, setSolution] = useState([[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]);
  const [tablet, setTablet] = useState([[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]);

  $(document).on('click', '.tablet .row .tile', function () {
    if($(this).hasClass('active')){
      $(this).removeClass('active');
    }
    else{
      $(this).addClass('active');
    }
  });

  return (
    <div>
      <h1>Goodbye World</h1>
      <Tablet tablet={tablet}/>
    </div>
  )
};

export default App;