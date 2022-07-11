const willIHikeToday = require("../willIHikeToday");
const hikePreditor = require("../hikingPredictor");

test('returns if you can hike today', () => {
    const originalHikePredictor = hikePreditor.isGoodDayToHike;
    hikePreditor.isGoodDayToHike = jest.fn(function goodDay() { return true });
    const result = willIHikeToday();

    expect(result).toBe("Yes!");
    console.log(hikePreditor.isGoodDayToHike.mock);
    expect(hikePreditor.isGoodDayToHike).toHaveBeenCalled();
    expect(hikePreditor.isGoodDayToHike).toHaveBeenCalledTimes(1);

    hikePreditor.isGoodDayToHike = originalHikePredictor;
})