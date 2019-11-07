const { createRoot, createComposite } = require('../dist/functions/utility');
const { add } = require('../dist/functions/manipulators');
const root = createRoot();
const entity = createComposite({ name: 'hello world' });
add(root, entity);
