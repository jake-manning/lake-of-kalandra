const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(bodyParser.json())
app.use(morgan())

app.use(express.static(path.join(__dirname, '/../client/dist')));

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`)
})