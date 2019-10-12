export type Entity<T> = {
  __isSyndicateObject__: boolean;
  parentIndex: number;
  parentId: string | null;
  index: number;
  id: string;
  data: T;
  childrenIndices: Array<number>;
  childrenIds: Array<string>;
};

export type RootList = Array<string | null>;
export type EntityList = Array<string>;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ParsedEntityList = Array<Entity<any>>;

export type Path = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: Array<any>;
};
