"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pow = pow;
exports.hypotenuse = hypotenuse;
exports.circleArea = circleArea;
exports.PI = void 0;

function pow(base, exponent) {
  return Math.pow(base, exponent);
}

function hypotenuse(adjacent, opposite) {
  return Math.hypot(adjacent, opposite);
}

function circleArea(radius) {
  return radius * radius * PI;
}

var PI = Math.PI;
exports.PI = PI;