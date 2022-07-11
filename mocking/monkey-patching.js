const willIHikeToday = require("./willIHikeToday");
const hikePreditor = require("./hikingPredictor");
const assert = require("assert");

// monkey-patching to make our test deterministic
const originalHikePredictor = hikePreditor.isGoodDayToHike;
hikePreditor.isGoodDayToHike = function goodDay() { return true };

try {
    assert.strictEqual(willIHikeToday(), "Yes!");
    console.log("Test Passed, you can go hiking!");
} catch (err) {
    console.log("Test Failed, stay at home today :D");
}

// cleanup after the test is done;

hikePreditor.isGoodDayToHike = originalHikePredictor;