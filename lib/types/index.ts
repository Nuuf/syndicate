export type SyndicateEntity<T> = {
  __isSyndicateEntity__: boolean;
  parentIndex: number;
  parentId: string | null;
  index: number;
  id: string;
  data: T;
  childrenIndices: Array<number>;
  childrenIds: Array<string>;
};

export type SyndicateRoot = Array<string | null>;
export type SyndicateEntities = Array<string>;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ParsedSyndicateEntities = Array<SyndicateEntity<any>>;

export type SyndicatePath = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: Array<any>;
};
