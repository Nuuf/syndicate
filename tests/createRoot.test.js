/* eslint-disable @typescript-eslint/no-var-requires */
const syndicate = require('../dist');

test('create a syndicate root', () => {
  const root = syndicate.createRoot();
  expect(JSON.stringify(root, null, 2)).toMatchSnapshot();
});
