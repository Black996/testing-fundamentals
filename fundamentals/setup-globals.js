function expect(actual) {
    return {
        toBe(expected) {
            if (actual !== expected) throw new Error(`${actual} is not equal to ${expected}`);
        }
    }
}

async function test(message, callback) {
    try {
        await callback();
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

global.test = test;
global.expect = expect;