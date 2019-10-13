/* eslint-disable @typescript-eslint/no-var-requires */
const syndicate = require('../dist');

test('swaps two entities', () => {
  const root = syndicate.createRoot();
  syndicate.add(root, syndicate.create({ someData: 0 }));
  syndicate.add(root, syndicate.create({ someData: 0 }));
  syndicate.add(root, syndicate.create({ someData: 0 }));
  const _1 = syndicate.find(root, '1');
  const _2 = syndicate.find(root, '2');
  const _3 = syndicate.find(root, '3');
  _1.data.someData = 1;
  _2.data.someData = 2;
  _3.data.someData = 3;
  syndicate.update(root, _1);
  syndicate.update(root, _2);
  syndicate.update(root, _3);
  expect(JSON.stringify(root, null, 2)).toMatchSnapshot();
});
