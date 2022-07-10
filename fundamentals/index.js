const { sum, subtract } = require("./math");

let result, expected;

result = sum(3, 7);
expected = 10;

expect(result, expected)

result = subtract(7, 3);
expected = 4;

expect(result, expected)

function expect(actual) {
    return {
        toBe(expected) {
            if (actual !== expected) throw new Error(`${actual} is not equal to ${expected}`);
        }
    }
}