/* eslint-disable @typescript-eslint/no-explicit-any */

export type SyndicateRootList = {
  [index: string]: string;
};

export type SyndicateRootEntity = {
  configEntities: SyndicateRootList;
  dataEntities: SyndicateRootList;
};

export type SyndicateConfigEntity = {
  key: string;
  childKeys: Array<string>;
  parentKey: string | null;
};

export type SyndicateCompositeEntity<T> = {
  config: SyndicateConfigEntity;
  data: T;
};

export type SyndicateCompositeEntities<T> = Array<SyndicateCompositeEntity<T>>;
export type SyndicateConfigEntities = Array<SyndicateConfigEntity>;
export type SyndicateDataEntities<T> = Array<T>;

export type UnparsedCompositeEntity = {
  config: string;
  data: string;
};
export type UnparsedCompositeEntities = Array<UnparsedCompositeEntity>;
