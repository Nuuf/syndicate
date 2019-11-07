import { SyndicateCompositeEntity } from '../../types';
import createConfig from './createConfig';

export default function createComposite<T>(dataEntity: T, customKey?: string): SyndicateCompositeEntity<T> {
  return {
    config: createConfig(customKey),
    data: dataEntity,
  };
}