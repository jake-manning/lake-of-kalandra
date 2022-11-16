require('dotenv').config();
const { Client } = require('pg');

const credentials = {
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  port: process.env.PGPORT
};

const client = new Client(credentials);
client.connect()
  .then(() => {
    console.log(`Connected to database '${process.env.PGDATABASE}' successfully`);
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = client;
