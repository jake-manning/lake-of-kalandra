import React from 'react';

const SolutionInfo = ({ tilesToAdd, tilesToSwap }) => {
  let addTiles;
  let swapTiles;

  if (tilesToAdd !== -1) {
    addTiles = <p>Tiles to Add: {tilesToAdd}</p>
  } else {
    addTiles = <></>
  }
  if (tilesToSwap !== -1) {
    swapTiles = <p>Tiles to Swap: {tilesToSwap}</p>
  } else {
    swapTiles = <></>
  }

  return (
    <div>
      {addTiles}
      {swapTiles}
    </div>
  )
};

export default SolutionInfo;