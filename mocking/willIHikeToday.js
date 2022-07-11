const hikePreditor = require("./hikingPredictor");

function willIHikeToday() {
    const isHikingDay = hikePreditor.isGoodDayToHike()
    return isHikingDay ? 'Yes!' : "No!"
}

module.exports = willIHikeToday;