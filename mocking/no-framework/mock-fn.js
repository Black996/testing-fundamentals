const assert = require("assert");
const willIHikeToday = require("../willIHikeToday");
const hikePredictor = require("../hikingPredictor");

const testingUtils = {
    toHaveBeenCalledTimes(func, n) {
        assert.strictEqual(func?.mock?.calls.length, n)
    },
    fn(impl) {
        function mockFn(...args) {
            mockFn.mock.calls.push(args)
            return impl(...args);
        }
        mockFn.mock = { calls: [] };
        return mockFn;
    }
}

const originalHikePredictor = hikePredictor.isGoodDayToHike;
hikePredictor.isGoodDayToHike = testingUtils.fn(function goodDay() { return true });

try {
    assert.strictEqual(willIHikeToday(), "Yes!");
    testingUtils.toHaveBeenCalledTimes(hikePredictor.isGoodDayToHike, 1);
    console.log("Test Passed, you can go hiking!");
} catch (err) {
    console.log("Test Failed, stay at home today :D");
    console.log(err);
}

// cleanup after the test is done;

hikePredictor.isGoodDayToHike = originalHikePredictor;