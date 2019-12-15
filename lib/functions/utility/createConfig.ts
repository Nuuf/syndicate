import { v4 } from 'uuid';
import { SyndicateConfigEntity } from '../../types';

export default function createConfig<T>(customKey?: string, configData?: T): SyndicateConfigEntity<T> {
  return {
    key: customKey ? customKey : v4(),
    childKeys: [],
    parentKey: null,
    configData,
  };
}
