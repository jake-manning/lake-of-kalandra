const { solutionTablets } = require('./solutionTablets');

module.exports = {
  findSolution: (inputTablet) => {
    // count how many tiles input tablet needs to add for 17 filled tiles
    let tiles = 0;
    inputTablet.forEach((row) => {
      row.forEach((tile) => {
        if (tile === 1) {
          tiles++;
        }
      });
    });
    let tilesToAdd = 17 - tiles;
    
    // compare input tablet to solution tablets and count number of tile differences
    let solutionTabletDifferences = {};
    for (let i = 0; i < solutionTablets.length; i++) {
      let differences = 0;
      for (let j = 0; j < 5; j++) {
        for (let k = 0; k < 5; k++) {
          // console.log('i: ', i, 'j: ', j, 'k: ', k);
          // console.log('input: ', inputTablet[j][k], 'solution: ', solutionTablets[i][j][k])
          if (inputTablet[j][k] !== solutionTablets[i][j][k]) {
            differences++;
          }
        }
      }
      solutionTabletDifferences[i] = differences - tilesToAdd;
    }
    // console.log(solutionTabletDifferences);

    // find solution tablet with least number of differences to input tablet
    let leastDifferences = 25;
    let solutionTabletNumber;
    for (const tablet in solutionTabletDifferences) {
       if (solutionTabletDifferences[tablet] < leastDifferences) {
        leastDifferences = solutionTabletDifferences[tablet];
        solutionTabletNumber = tablet;
       }
    }
    let solution = {
      tilesToAdd: tilesToAdd,
      tilesToSwap: solutionTabletDifferences[solutionTabletNumber] / 2,
      solution: solutionTablets[solutionTabletNumber]
    };

    // return solution tablet and number of tiles needed to add to input
    return solution;
  }
};

// console.log(module.exports.findSolution([
//   [ 1, 1, 1, 1, 1 ],
//   [ 0, 0, 0, 0, 1 ],
//   [ 1, 1, 0, 1, 1 ],
//   [ 1, 1, 1, 1, 0 ],
//   [ 1, 0, 1, 1, 0 ]
// ]))