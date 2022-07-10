const { sum, subtract } = require("./math");


test("sums two numbers", () => {
    const result = sum(3, 7);
    const expected = 10;
    expect(result).toBe(expected);
})

test("subtracts two numbers", () => {
    const result = subtract(7, 3);
    const expected = 4;
    expect(result).toBe(expected);
})


function expect(actual) {
    return {
        toBe(expected) {
            if (actual !== expected) throw new Error(`${actual} is not equal to ${expected}`);
        }
    }
}

function test(message, callback) {
    try {
        callback();
        console.log(
            `
        ###############
        ✓ ${message}
        ###############
        `
        )
    } catch (err) {
        console.log(
            `
        ###############
        x ${message}
        ###############
        `
        )
        console.error(err);
    }
}