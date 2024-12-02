import fs from 'fs';

// read input from the file
fs.readFile('puzzle_input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading puzzle:', err);
    return;
  }

  // split the input into rows
  const lines = data.trim().split('\n');

  // initialize arrays needed
  const leftList = [];
  const rightList = [];

  // parse each line into left and right columns
  lines.forEach(line => {
    const [left, right] = line.trim().split(/\s+/).map(Number);
    if (!isNaN(left) && !isNaN(right)) {
      leftList.push(left);
      rightList.push(right);
    }
  });

  // sort lists
  leftList.sort((a, b) => a - b);
  rightList.sort((a, b) => a - b);

  // calculate total distance
  let totalDistance = 0;
  for (let i = 0; i < leftList.length; i++) {
    totalDistance += Math.abs(leftList[i] - rightList[i]);
  }

  console.log('Total Distance:', totalDistance);
});
