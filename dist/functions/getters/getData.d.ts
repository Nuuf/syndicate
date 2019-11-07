import { SyndicateRootEntity } from '../../types';
export default function getData<T>(root: SyndicateRootEntity, key: string, noParse?: false): T;
export default function getData(root: SyndicateRootEntity, key: string, noParse?: true): string;
