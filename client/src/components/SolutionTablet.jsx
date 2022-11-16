import React from 'react';

const SolutionTablet = ({ solution }) => {
  return (
    <div className="solution">
      {solution.map((row, rowIndex) => {
        return (
          <div className="row" key={`solutionRow:${rowIndex + 1}`}>
            {row.map((tile, tileIndex) => {
              if (!tile) {
                return (
                  <div 
                    className="tile" 
                    id={`solution:${5 * rowIndex + tileIndex}`} 
                    key={`solution:${5 * rowIndex + tileIndex}`}>
                  </div>
                )
              }
              return (
                <div 
                  className="tile active" 
                  id={`solution:${5 * rowIndex + tileIndex}`} 
                  key={`solution:${5 * rowIndex + tileIndex}`}>
                </div>
              )
            })}
          </div>
      )})}
    </div>
  )
};

export default SolutionTablet;