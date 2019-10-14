/* eslint-disable @typescript-eslint/no-var-requires */
const syndicate = require('../dist');

test('gets the children or a slice of a parent', () => {
  const root = syndicate.createRoot();
  const parent = syndicate.add(root, syndicate.create({}, 'parent'));
  syndicate.add(root, syndicate.create({}, 'A'), parent);
  syndicate.add(root, syndicate.create({}, 'B'), parent);
  syndicate.add(root, syndicate.create({}, 'C'), parent);
  syndicate.add(root, syndicate.create({}, 'D'), parent);
  syndicate.add(root, syndicate.create({}, 'E'), parent);
  const children = syndicate.getChildren(root, parent, 2, 0);
  expect(JSON.stringify(children, null, 2)).toMatchSnapshot();
});
