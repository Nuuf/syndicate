/* eslint-disable @typescript-eslint/no-var-requires */
const syndicate = require('../dist');

test('returns a parsed entity by id', () => {
  const root = syndicate.createRoot();
  syndicate.add(root, syndicate.create({}, 'A'));
  const entity = syndicate.find(root, 'A');
  expect(entity).not.toBe(null);
});
