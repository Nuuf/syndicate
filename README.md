# Syndicate

## A connected list of strings.

```js
import { createRoot, add, create } from '@nuuf/syndicate';
// Make sure the entity exists in the list before trying to manipulate it.
const root = createRoot();
add(root, create({someData: 'hello world'}, 'custom_id'));
```
