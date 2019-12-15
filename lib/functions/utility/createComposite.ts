import { SyndicateCompositeEntity } from '../../types';
import { createConfig } from '.';

export default function createComposite<T, C>(
  dataEntity: T,
  configData?: C,
  customKey?: string
): SyndicateCompositeEntity<T, C> {
  return {
    config: createConfig(customKey, configData),
    data: dataEntity,
  };
}
