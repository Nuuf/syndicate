/* eslint-disable @typescript-eslint/no-explicit-any */

export type SyndicateRootList = {
  [index: string]: string;
};

export type SyndicateRootEntity = {
  configEntities: SyndicateRootList;
  dataEntities: SyndicateRootList;
};

export type SyndicateConfigEntity<T> = {
  key: string;
  childKeys: Array<string>;
  parentKey: string | null;
  configData?: T;
};

export type SyndicateCompositeEntity<T, C> = {
  config: SyndicateConfigEntity<C>;
  data: T;
};

export type SyndicateCompositeEntities<T, C> = Array<SyndicateCompositeEntity<T, C>>;
export type SyndicateConfigEntities<T> = Array<SyndicateConfigEntity<T>>;
export type SyndicateDataEntities<T> = Array<T>;

export type UnparsedSyndicateCompositeEntity = {
  config: string;
  data: string;
};
export type UnparsedSyndicateCompositeEntities = Array<UnparsedSyndicateCompositeEntity>;
export type UnparsedSyndicateConfigEntities = Array<string>;
export type UnparsedSyndicateDataEntities = Array<string>;
