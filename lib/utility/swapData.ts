/**
 * Swaps data between two objects
 *
 */
export function swapData<T, C>(a: Record<string, T>, b: Record<string, C>, data: string): void {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const t = a[data] as any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  a[data] = b[data] as any;
  b[data] = t;
}
