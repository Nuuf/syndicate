/* eslint-disable @typescript-eslint/no-explicit-any */
import { SyndicateRootEntity } from '../../types';

export default function getData<T>(root: SyndicateRootEntity, key: string, noParse?: false): T;
export default function getData(root: SyndicateRootEntity, key: string, noParse?: true): string;
export default function getData(root: SyndicateRootEntity, key: string, noParse?: boolean): any {
  if (noParse) return root.dataEntities[key];
  return JSON.parse(root.dataEntities[key]);
}
