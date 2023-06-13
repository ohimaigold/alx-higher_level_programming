#!/usr/bin/node

const value = process.argv;

if (value[2] === undefined) {
  console.log('No argument');
} else {
  console.log(value[2]);
}
