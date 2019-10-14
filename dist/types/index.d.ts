export declare type SyndicateEntity<T> = {
    __isSyndicateEntity__: boolean;
    parentIndex: number;
    parentId: string | null;
    index: number;
    id: string;
    data: T;
    childrenIndices: Array<number>;
    childrenIds: Array<string>;
};
export declare type SyndicateRoot = Array<string | null>;
export declare type SyndicateEntities = Array<string>;
export declare type ParsedSyndicateEntities = Array<SyndicateEntity<any>>;
export declare type SyndicatePath = {
    [key: string]: Array<any>;
};
