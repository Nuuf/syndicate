/* eslint-disable @typescript-eslint/no-var-requires */
const syndicate = require('../dist');

test('crunches a syndicate root', () => {
  const root = syndicate.createRoot();
  syndicate.add(root, syndicate.create({}, 'A'));
  syndicate.add(root, syndicate.create({}, 'B'));
  syndicate.add(root, syndicate.create({}, 'C'));
  syndicate.add(root, syndicate.create({}, 'D'));
  syndicate.add(root, syndicate.create({}, 'E'));
  syndicate.add(root, syndicate.create({}, 'F'));
  syndicate.remove(root, syndicate.find(root, 'F'));
  syndicate.remove(root, syndicate.find(root, 'A'));
  syndicate.remove(root, syndicate.find(root, 'C'));
  syndicate.crunch(root);
  expect(JSON.stringify(root, null, 2)).toMatchSnapshot();
});
