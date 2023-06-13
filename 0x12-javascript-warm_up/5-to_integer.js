#!/usr/bin/node
const value = process.argv;
if (Number.isInteger(Number.parseInt(value[2]))) {
  console.log(`My number: ${value[2]}`);
} else {
  console.log('Not a number');
}
