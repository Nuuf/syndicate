/* eslint-disable @typescript-eslint/no-var-requires */
const syndicate = require('../dist');

test('clones an entity', () => {
  const root = syndicate.createRoot();
  syndicate.add(root, syndicate.create({}, 'parent'));
  syndicate.add(root, syndicate.create({ someData: 'hello world' }, 'child'), syndicate.find(root, 'parent'));
  syndicate.clone(root, syndicate.find(root, 'child'), syndicate.START);
  syndicate.clone(root, syndicate.find(root, 'child'), syndicate.END);
  syndicate.clone(root, syndicate.find(root, 'child'), syndicate.START);
  syndicate.clone(root, syndicate.find(root, 'child'), syndicate.END);
  syndicate.clone(root, syndicate.find(root, 'child'), syndicate.START);
  expect(JSON.stringify(root, null, 2)).toMatchSnapshot();
});
