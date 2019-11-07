export declare type SyndicateRootList = {
    [index: string]: string;
};
export declare type SyndicateRootEntity = {
    configEntities: SyndicateRootList;
    dataEntities: SyndicateRootList;
};
export declare type SyndicateConfigEntity = {
    key: string;
    childKeys: Array<string>;
    parentKey: string | null;
};
export declare type SyndicateCompositeEntity<T> = {
    config: SyndicateConfigEntity;
    data: T;
};
export declare type SyndicateCompositeEntities<T> = Array<SyndicateCompositeEntity<T>>;
export declare type SyndicateConfigEntities = Array<SyndicateConfigEntity>;
export declare type SyndicateDataEntities<T> = Array<T>;
export declare type UnparsedCompositeEntity = {
    config: string;
    data: string;
};
export declare type UnparsedCompositeEntities = Array<UnparsedCompositeEntity>;
