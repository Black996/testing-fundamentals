function fn(impl = () => { }) {
    function mockFn(...args) {
        mockFn.mock.calls.push(args)
        return impl(...args);
    }
    mockFn.mock = { calls: [] };
    mockFn.mockImplementation = (newImpl) => impl = newImpl;

    return mockFn;
}

module.exports = {
    isGoodDayToHike: fn(() => true)
}