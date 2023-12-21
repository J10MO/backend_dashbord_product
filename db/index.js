const { Client } = require('pg');
require("dotenv").config();

const client = new Client({
  connectionString: process.env.DATABACE_CONACTION,
});
client.connect(err => {
    if (err) throw err;
    console.log("Connected to database");
    })
    module.exports =client;