import {format} from './format.js';

let pows = [5,9];
let hypotenuses = [8,11];
let circleAreas = [8];

console.log(format('Circle Area', circleAreas).circleArea);
console.log(format('Hypotenuses', hypotenuses).hypotenuse);
console.log(format('Pow', pows).pows);

