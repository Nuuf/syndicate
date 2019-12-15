# Syndicate

## A connected list of strings.

Keep heavy data in the data object and light data in the configData object

```ts
type Conf = {
  name: string;
  type: string;
};
type Data = {
  foo: number;
  bar: {
    x: number;
    y: number;
    z: boolean;
  };
};
const root = createRoot();
const entityA = createComposite<Data, Conf>(
  {
    foo: 1,
    bar: { x: 0, y: 2, z: false },
  },
  {
    name: 'A',
    type: 'entity',
  }
);
add(root, entityA);
```

Basically a simple way to handle a local database