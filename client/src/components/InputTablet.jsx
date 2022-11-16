import React from 'react';

const InputTablet = ({ tablet, tileClickHandler }) => {
  return (
    <div className="input">
      {tablet.map((row, rowIndex) => {
        return (
          <div className="row" key={`inputRow:${rowIndex}`}>
            {row.map((tile, tileIndex) => {
              if (!tile) {
                return (
                  <div 
                    onClick={(e) => tileClickHandler(e)} 
                    className="tile" 
                    id={`${5 * rowIndex + tileIndex + 1}`} 
                    key={`input:${5 * rowIndex + tileIndex + 1}`}>
                  </div>
                )
              }
              return (
                <div 
                  onClick={(e) => tileClickHandler(e)} 
                  className="tile active" 
                  id={`${5 * rowIndex + tileIndex + 1}`} 
                  key={`input:${5 * rowIndex + tileIndex + 1}`}>
                </div>
              )
            })}
          </div>
      )})}
    </div>
  )
};

export default InputTablet;
