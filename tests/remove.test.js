/* eslint-disable @typescript-eslint/no-var-requires */
const syndicate = require('../dist');

test('removes an entity', () => {
  const root = syndicate.createRoot();
  syndicate.add(root, syndicate.create({}, 'entity'));
  syndicate.remove(root, syndicate.find(root, 'entity'));
  expect(JSON.stringify(root, null, 2)).toMatchSnapshot();
});
