import React, { useEffect } from 'react';

const Tablet = ({ tablet }) => {
  // let html = '';
  // for (let i = 0; i < 5; i++) {
  //   html += '<div class="row">';
  //   for (let j = 0; j < 5; j++) {
  //     if (tablet[5 * i + j] === 1) {
  //       html += `<div class="tile" id="${5 * i + j + 1}"></div>`;
  //     } else if (tablet[5 * i + j] === 0) {
  //       html += `<div class="tile" id="${5 * i + j + 1}"></div>`;
  //     }
  //   }
  //   html += '</div>';
  // }

  // dangerouslySetInnerHTML={{__html: html}}
  return (
    <div className="tablet">
      {tablet.map((row, rowIndex) => {
        return (
          <div className="row">
            {row.map((tile, tileIndex) => {
              if (!tile) {
                return <div className="tile" id={`${5 * rowIndex + tileIndex + 1}`} key={`input:${5 * rowIndex + tileIndex + 1}`}></div>
              }
              return <div className="tile active" id={`${5 * rowIndex + tileIndex + 1}`} key={`input:${5 * rowIndex + tileIndex + 1}`}></div>
            })}
          </div>
      )})}
    </div>
  )
}

export default Tablet;
