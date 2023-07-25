#!/usr/bin/node

const request = require('request');

const movieId = process.argv[2];
const url = 'https://swapi-api.alx-tools.com/api/films/';

request(url + movieId, function (error, response, body) {
  if (error) {
    console.error(error);
    return;
  }

  if (response.statusCode !== 200) {
    console.error(`Unexpected status code: ${response.statusCode}`);
    return;
  }

  const film = JSON.parse(body);
  const characters = film.characters;

  for (const characterUrl of characters) {
    request(characterUrl, function (error, response, body) {
      if (error) {
        console.error(error);
        return;
      }

      if (response.statusCode !== 200) {
        console.error(`Unexpected status code: ${response.statusCode}`);
        return;
      }

      const character = JSON.parse(body);
      console.log(character.name);
    });
  }
});
