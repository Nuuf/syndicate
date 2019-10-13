/* eslint-disable @typescript-eslint/no-var-requires */
const syndicate = require('../dist');

test('changes the parent of an entity using a sibling', () => {
  const root = syndicate.createRoot();
  syndicate.add(root, syndicate.create({}, 'parent'));
  const a = syndicate.add(root, syndicate.create({}, 'siblingA'), syndicate.find(root, 'parent'));
  const b = syndicate.add(root, syndicate.create({}, 'siblingB'));
  syndicate.inject(root, a, b, true);
  expect(JSON.stringify(root, null, 2)).toMatchSnapshot();
});
