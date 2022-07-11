// external util that predicts if its a good day to hike or not
function isGoodDayToHike() {
    const weather = Math.floor((Math.random() * 25) + 1);
    return weather > 15;
}

module.exports = { isGoodDayToHike };