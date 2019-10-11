/**
 * Deletes from array
 *
 */

export function shiftDelete(array: ArrayType, index: number): T {
  if (array.length < 1) return;
  const returnee = array[index];

  while (index > 0) {
    array[index] = array[index - 1];
    index--;
  }

  array.shift();

  return returnee;
}
