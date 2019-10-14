import { SyndicateEntity, SyndicatePath, SyndicateRoot } from '../types';
/**
 * Returns an object containing arrays of values in order entity > root
 *
 */
export declare function getPath<T>(root: SyndicateRoot, entity: SyndicateEntity<T>, attributes?: Array<string>, reverse?: boolean): SyndicatePath;
