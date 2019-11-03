# Syndicate

## A connected list of strings.

```js
import { createRoot, add, create } from '@nuuf/syndicate';
// Make sure the entity exists in the list before trying to manipulate it.
const root = createRoot();
add(root, create({someData: 'hello world'}, 'custom_id'));
```

root = {
    entities: {
        'root': Entity
        'id-1': Entity
        'id-2': Entity
    }
    data: {
        'root': null
        'id-1': {}
        'id-2': {}
    }
}

entity = {
    children: ['cid1', 'cid2']
    dataKey:  'myId'
    parent:   'parentId'
}