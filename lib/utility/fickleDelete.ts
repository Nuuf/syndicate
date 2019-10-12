import { popDelete } from './popDelete';
import { shiftDelete } from './shiftDelete';

/**
 * Deletes from array
 *
 */

export function fickleDelete<T>(array: Array<T>, index: number): T | void {
  if (index > array.length * 0.5) return popDelete(array, index);

  return shiftDelete(array, index);
}
