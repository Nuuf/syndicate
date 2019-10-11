import { v4 } from 'uuid';

/**
 * Creates a new syndicate object
 *
 */
export function create(data: T, customId?: string): Entity<T> {
  return {
    __isSyndicateObject__: true,
    parentIndex: -1,
    parentId: null,
    index: -1,
    id: customId == null ? v4() : customId,
    data: data == null ? {} : data,
    childrenIndices: [],
    childrenIds: [],
  };
}
