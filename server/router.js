const router = require('express').Router();
const { controllers } = require('./controllers');

router.post('/solution', controllers.getSolution);

module.exports = router;