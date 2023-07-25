#!/usr/bin/node

const r = require('request');
const url = 'https://swapi-api.alx-tools.com/api/films/';
const id = process.argv[2];
const urlEndPoint = url + id;
r(urlEndPoint, (err, reponse, body) => {
  if (err) {
    console.error(err);
  }
  const resultquery = reponse.statusCode === 200 ? JSON.parse(body).title : 'error code: ' + reponse.statusCode;
  console.log(resultquery);
});
