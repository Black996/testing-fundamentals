const sum = (a, b) => a + b;
const subtract = (a, b) => a - b;

const sumAsync = (...args) => Promise.resolve(sum(...args));

module.exports = { sum, subtract, sumAsync };