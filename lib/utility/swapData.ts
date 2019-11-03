/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Swaps data between two objects
 *
 */
export function swapData(a: Record<string, any>, b: Record<string, any>, key: string): void {
  const t = a[key] as any;
  a[key] = b[key] as any;
  b[key] = t;
}
