#!/usr/bin/node

const r = require('request');
const url = process.argv[2];
r(url, (err, reponse) => {
  if (err) {
    console.error(err);
  }
  console.log('code: ' + reponse.statusCode);
});
