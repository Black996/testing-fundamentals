// using to rquire cache to mock an entire module
const testingUtils = {
    toHaveBeenCalledTimes(func, n) {
        assert.strictEqual(func?.mock?.calls.length, n)
    },
    fn(impl = () => { }) {
        function mockFn(...args) {
            mockFn.mock.calls.push(args)
            return impl(...args);
        }
        mockFn.mock = { calls: [] };
        mockFn.mockImplementation = (newImpl) => impl = newImpl;

        return mockFn;
    },
}
const hikePredictorPath = require.resolve("../hikingPredictor");
require.cache[hikePredictorPath] = {
    id: hikePredictorPath,
    filename: hikePredictorPath,
    loaded: true,
    exports: {
        isGoodDayToHike: testingUtils.fn(() => true)
    }
}

const assert = require("assert");
const willIHikeToday = require("../willIHikeToday");
const hikePredictor = require("../hikingPredictor");

try {
    assert.strictEqual(willIHikeToday(), "Yes!");
    testingUtils.toHaveBeenCalledTimes(hikePredictor.isGoodDayToHike, 1);
    console.log("Test Passed, you can go hiking!");
} catch (err) {
    console.log("Test Failed, stay at home today :D");
    console.log(err);
}

// cleanup after the test is done;
delete require.cache[hikePredictorPath];
// hikePredictor.isGoodDayToHike.mockRestore();