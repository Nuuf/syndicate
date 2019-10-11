export type Entity<T> = {
  __is_syndicate_object__: boolean;
  parentIndex: number;
  parentId: string | null;
  index: number;
  id: string | null;
  data: T;
  childrenIndices: Array<number>;
  childrenIds: Array<string>;
};
