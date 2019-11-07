export default function popDelete<T>(array: Array<T>, index: number): T | void {
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
