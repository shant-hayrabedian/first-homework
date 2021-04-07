"use strict";

var _format = require("./format.js");

var pows = [5, 9];
var hypotenuses = [8, 11];
var circleAreas = [8];
console.log((0, _format.format)('Circle Area', circleAreas).circleArea);
console.log((0, _format.format)('Hypotenuses', hypotenuses).hypotenuse);
console.log((0, _format.format)('Pow', pows).pows);