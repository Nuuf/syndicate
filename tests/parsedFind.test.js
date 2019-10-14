/* eslint-disable @typescript-eslint/no-var-requires */
const syndicate = require('../dist');

test('returns an entity by id', () => {
  const root = syndicate.createRoot();
  syndicate.add(root, syndicate.create({}, 'A'));
  syndicate.add(root, syndicate.create({}, 'B'));
  syndicate.add(root, syndicate.create({}, 'C'));
  syndicate.add(root, syndicate.create({}, 'D'));
  syndicate.add(root, syndicate.create({}, 'E'));
  const entities = syndicate.getRootEntitiesParsed(root);
  const entity = syndicate.parsedFind(entities, 'C');
  expect(entity).not.toBe(null);
});
