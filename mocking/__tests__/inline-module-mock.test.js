const willIHikeToday = require("../willIHikeToday");
const hikingPredictor = require("../hikingPredictor");

jest.mock('../hikingPredictor', () => ({ isGoodDayToHike: jest.fn(() => true) }))

test('returns if you can hike today', () => {
    const result = willIHikeToday();

    expect(result).toBe("Yes!");
    expect(hikingPredictor.isGoodDayToHike).toHaveBeenCalled();
    expect(hikingPredictor.isGoodDayToHike).toHaveBeenCalledTimes(1);

    //cleanup
    hikingPredictor.isGoodDayToHike.mockReset();
})