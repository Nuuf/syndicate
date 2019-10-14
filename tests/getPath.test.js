/* eslint-disable @typescript-eslint/no-var-requires */
const syndicate = require('../dist');

test('gets the path of index and one or more attributes found in data', () => {
  const root = syndicate.createRoot();
  const a = syndicate.add(root, syndicate.create({ someData: 'path' }, 'A'));
  const b = syndicate.add(root, syndicate.create({ someData: 'to' }, 'B'), a);
  const c = syndicate.add(root, syndicate.create({ someData: 'this' }, 'C'), b);
  const d = syndicate.add(root, syndicate.create({ someData: 'little' }, 'D'), c);
  const e = syndicate.add(root, syndicate.create({ someData: 'data' }, 'E'), d);
  const path = syndicate.getPath(root, e, ['someData'], true);
  expect(JSON.stringify(path.someData, null, 2)).toMatchSnapshot();
});
