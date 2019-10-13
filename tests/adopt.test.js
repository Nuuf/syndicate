/* eslint-disable @typescript-eslint/no-var-requires */
const syndicate = require('../dist');

test('changes the parent of an entity', () => {
  const root = syndicate.createRoot();
  syndicate.add(root, syndicate.create({}, 'parentA'));
  syndicate.add(root, syndicate.create({}, 'parentB'));
  syndicate.add(root, syndicate.create({}, 'child'), syndicate.find(root, 'parentA'));
  syndicate.adopt(root, syndicate.find(root, 'child'), syndicate.find(root, 'parentB'));
  expect(JSON.stringify(root, null, 2)).toMatchSnapshot();
});
