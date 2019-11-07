import { popDelete } from '.';
import { shiftDelete } from '.';

export default function fickleDelete<T>(array: Array<T>, index: number): T | void {
  if (index > array.length * 0.5) return popDelete(array, index);

  return shiftDelete(array, index);
}
