/* eslint-disable @typescript-eslint/no-var-requires */
const syndicate = require('../dist');

test('returns a parsed entity by index', () => {
  const root = syndicate.createRoot();
  syndicate.add(root, syndicate.create({}, 'A'));
  const entity = syndicate.getAt(root, 1);
  expect(entity).not.toBe(null);
});
