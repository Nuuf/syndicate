/**
 * Deletes from array
 *
 */

export function popDelete(array: ArrayType, index: number): T {
  const l = array.length - 1;

  if (l < 1) return;

  const returnee = array[index];

  while (index < l) {
    array[index] = array[index + 1];
    index++;
  }

  array.pop();

  return returnee;
}
