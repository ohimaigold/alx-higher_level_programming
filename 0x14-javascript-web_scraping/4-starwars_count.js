#!/usr/bin/node

const r = require('request');
const url = process.argv[2];
const id = 18;

r(url, (err, reponse, body) => {
  if (err) {
    console.error(err);
  }
  const resultquery = reponse.statusCode === 200 ? JSON.parse(body).results : null;
  let count = 0;
  if (resultquery) {
    resultquery.forEach(element => {
      element.characters.forEach(characterUrl => {
        if (characterUrl.includes(id)) {
          count++;
        }
      });
    });
  }
  console.log(resultquery ? count : 'error code: ' + reponse.statusCode);
});
