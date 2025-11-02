//let A = 3
//let B = 2
//let distance = B
//console.log(distance)



const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n').map(Number);

const A = input[0];
const B = input[1];
const C = input[2];
const D = input[3];

const area = A * B - (A - C) * (B - D);
console.log(area);