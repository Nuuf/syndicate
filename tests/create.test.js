/* eslint-disable @typescript-eslint/no-var-requires */
const syndicate = require('../dist');

test('creates an entity', () => {
  const entity = syndicate.create({});
  expect(JSON.stringify(entity, null, 2)).toMatchSnapshot();
});
