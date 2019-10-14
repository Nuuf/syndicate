/* eslint-disable @typescript-eslint/no-var-requires */
const syndicate = require('../dist');

test('swaps two entities', () => {
  const root = syndicate.createRoot();
  const a = syndicate.add(root, syndicate.create({}, 'A'));
  const b = syndicate.add(root, syndicate.create({}, 'B'));
  syndicate.swap(root, a, b);
  expect(JSON.stringify(root, null, 2)).toMatchSnapshot();
});
