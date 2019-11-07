import { SyndicateRootEntity, SyndicateCompositeEntity } from '../../types';
import getConfig from './getConfig';
import getData from './getData';

export default function getComposite<T>(root: SyndicateRootEntity, key: string): SyndicateCompositeEntity<T> {
  return {
    config: getConfig(root, key),
    data: getData(root, key),
  };
}
