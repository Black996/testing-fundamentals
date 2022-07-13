const willIHikeToday = require("../willIHikeToday");
const hikingPredictor = require("../hikingPredictor");

test('returns if you can hike today', () => {
    const originalHikePredictor = hikingPredictor.isGoodDayToHike;
    hikingPredictor.isGoodDayToHike = jest.fn(function goodDay() { return true });
    const result = willIHikeToday();

    expect(result).toBe("Yes!");
    expect(hikingPredictor.isGoodDayToHike).toHaveBeenCalled();
    expect(hikingPredictor.isGoodDayToHike).toHaveBeenCalledTimes(1);

    hikingPredictor.isGoodDayToHike = originalHikePredictor;
})