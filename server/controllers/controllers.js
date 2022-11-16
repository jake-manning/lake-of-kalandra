const { findSolution } = require('./solution');

module.exports = {
  getSolution: (req, res) => {
    console.log('POST to getSolution');
    console.log('req body: ', req.body);
    let solution = findSolution(req.body.tablet);
    res.send(solution);
  }
};