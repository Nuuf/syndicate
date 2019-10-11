import { popDelete } from './popDelete';
import { shiftDelete } from './shiftDelete';

/**
 * Deletes from array
 *
 */

export function fickleDelete(array: ArrayType, index: number): T {
  if (index > array.length * 0.5) return popDelete(array, index);

  return shiftDelete(array, index);
}
