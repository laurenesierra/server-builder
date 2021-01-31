'use strict';

const express = require('express');

require('dotenv').config();
const superagent = require('superagent');

const app = express();
const DATABASE_URL = process.env.DATABASE_URL;

const PORT = process.env.PORT || 3001;

app.get('/', getHome);
app.get('/search', getSearch);
app.post('/submit', postSubmit);


function getHome {

};

function getSearch {

}

function postSubmit {
  
}

client.connect()
  .then(() => {
    app.listen(PORT, () => console.log(`we are up on port ${PORT}`));
  }).catch(error => {
    console.log('heeeey', error);
  });

