/* eslint-disable @typescript-eslint/no-explicit-any */
import { SyndicateRootEntity, SyndicateConfigEntity } from '../../types';

export default function getConfig<T>(root: SyndicateRootEntity, key: string, noParse?: false): SyndicateConfigEntity<T>;
export default function getConfig(root: SyndicateRootEntity, key: string, noParse?: true): string;
export default function getConfig(root: SyndicateRootEntity, key: string, noParse?: boolean): any {
  if (noParse) return root.configEntities[key];
  return JSON.parse(root.configEntities[key]);
}
