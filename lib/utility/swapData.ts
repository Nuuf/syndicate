/**
 * Swaps data between two objects
 *
 */
export function swapData(a, b, data): void {
  const t = a[data];

  a[data] = b[data];
  b[data] = t;
}
