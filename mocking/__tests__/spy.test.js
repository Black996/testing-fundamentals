// we can achieve mocking the function with spy utility from jest as well
const willIHikeToday = require("../willIHikeToday");
const hikingPredictor = require("../hikingPredictor");

test('returns if you can hike today', () => {
    jest.spyOn(hikingPredictor, "isGoodDayToHike");
    hikingPredictor.isGoodDayToHike.mockImplementation(function goodDay() { return true });
    const result = willIHikeToday();

    expect(result).toBe("Yes!");
    expect(hikingPredictor.isGoodDayToHike).toHaveBeenCalled();
    expect(hikingPredictor.isGoodDayToHike).toHaveBeenCalledTimes(1);

    //cleanup
    hikingPredictor.isGoodDayToHike.mockRestore();
})