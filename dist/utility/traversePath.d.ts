import { SyndicateEntity, SyndicatePath, SyndicateRoot } from '../types';
/**
 * Generates values for getPath
 *
 */
export declare function traversePath<T>(root: SyndicateRoot, path: SyndicatePath, entity: SyndicateEntity<T>, attributes?: Array<string>): SyndicatePath;
