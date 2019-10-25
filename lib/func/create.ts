import { v4 } from 'uuid';
import { SyndicateEntity } from '../types';

/**
 * Creates a new syndicate entity
 *
 */
export function create<T>(data: T, customId?: string): SyndicateEntity<T> {
  return {
    __isSyndicateEntity__: true,
    parentIndex: -1,
    parentId: null,
    index: -1,
    id: customId == null ? v4() : customId,
    data: data,
    childrenIndices: [],
    childrenIds: [],
  };
}
