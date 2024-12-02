import fetch from 'node-fetch';
import fs from 'fs';

const sessionCookie = '53616c7465645f5f69dfeafedb8623f9aa1da800e24913862e90ce628f824cdfc8c6d6f8485e5740b72e968c76e8ebda7d4168944b35ed4b889c6e11fd5c2a9f';

// URL to fetch the puzzle input 
const url = 'https://adventofcode.com/2024/day/1/input';

// fetch puzzle input using the session cookie
fetch(url, {
  method: 'GET',
  headers: {
    'Cookie': `session=${sessionCookie}`,
  },
})
.then(response => response.text())
.then(input => {
  console.log("Puzzle Input: ", input);
  // write the input to a file
  fs.writeFile('puzzle_input.txt', input, (err) => {
    if (err) throw err;
    console.log('Puzzle input saved to puzzle_input.txt');
  });
})
.catch(error => {
  console.error('Error fetching input:', error);
});