import React from 'react';

const SolutionTablet = ({ solution }) => {
  return (
    <div className="solution">
      {solution.map((row, rowIndex) => {
        return (
          <div className="row" key={`solutionRow:${rowIndex + 1}`}>
            {row.map((tile, tileIndex) => {
              if (!tile) {
                return <div className="tile" id={`${5 * rowIndex + tileIndex + 1}`} key={`solution:${5 * rowIndex + tileIndex + 1}`}></div>
              }
              return <div className="tile active" id={`${5 * rowIndex + tileIndex + 1}`} key={`solution:${5 * rowIndex + tileIndex + 1}`}></div>
            })}
          </div>
      )})}
    </div>
  )
};

export default SolutionTablet;