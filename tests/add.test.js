/* eslint-disable @typescript-eslint/no-var-requires */
const syndicate = require('../dist');

test('adds an entity', () => {
  const root = syndicate.createRoot();
  syndicate.add(root, syndicate.create());
  expect(JSON.stringify(root, null, 2)).toMatchSnapshot();
});
