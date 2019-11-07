import { SyndicateRootEntity } from '../../types';

export default function getData<T>(root: SyndicateRootEntity, key: string): T {
  return JSON.parse(root.dataEntities[key]);
}
