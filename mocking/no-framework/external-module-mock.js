require("../__no-framework-mocks__/hikingPredictor");
const hikingPredictorModulePath = require.resolve("../hikingPredictor");
const mockModulePath = require.resolve("../__no-framework-mocks__/hikingPredictor");
require.cache[hikingPredictorModulePath] = require.cache[mockModulePath];

const testingUtils = {
    toHaveBeenCalledTimes(func, n) {
        assert.strictEqual(func?.mock?.calls.length, n)
    },
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
delete require.cache[hikingPredictorModulePath];
// hikePredictor.isGoodDayToHike.mockRestore();