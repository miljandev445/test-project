const server = require('./serverCaller');

test('Should return online server with lowest priority',async () => {
  expect(await server.findServer()).toBe('https://gitlab.com');
});