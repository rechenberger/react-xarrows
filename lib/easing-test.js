"use strict";
const bzFunction = (p1, p2, p3, p4) => (t) => Math.pow((1 - t), 3) * p1 +
    3 * Math.pow((1 - t), 2) * t * p2 +
    3 * (1 - t) * Math.pow(t, 2) * p3 +
    Math.pow(t, 3) * p4;
const ease = (highIfDiffHigh, t) => {
    const easing = bzFunction(0 + highIfDiffHigh, 0, 1 - highIfDiffHigh, 1);
    return Math.round(easing(t) * 100) / 100;
};
console.log(ease(0, 0.0));
console.log(ease(0, 0.1));
console.log(ease(0, 0.2));
console.log(ease(0, 0.3));
console.log(ease(0, 0.4));
console.log(ease(0, 0.5));
console.log(ease(0, 0.6));
console.log(ease(0, 0.7));
console.log(ease(0, 0.8));
console.log(ease(0, 0.9));
console.log(ease(0, 1.0));
console.log(ease(0.5, 0.0));
console.log(ease(0.5, 0.1));
console.log(ease(0.5, 0.2));
console.log(ease(0.5, 0.3));
console.log(ease(0.5, 0.4));
console.log(ease(0.5, 0.5));
console.log(ease(0.5, 0.6));
console.log(ease(0.5, 0.7));
console.log(ease(0.5, 0.8));
console.log(ease(0.5, 0.9));
console.log(ease(0.5, 1.0));
console.log(ease(1, 0.0));
console.log(ease(1, 0.1));
console.log(ease(1, 0.2));
console.log(ease(1, 0.3));
console.log(ease(1, 0.4));
console.log(ease(1, 0.5));
console.log(ease(1, 0.6));
console.log(ease(1, 0.7));
console.log(ease(1, 0.8));
console.log(ease(1, 0.9));
console.log(ease(1, 1.0));
//# sourceMappingURL=easing-test.js.map