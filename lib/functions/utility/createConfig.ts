import { v4 } from 'uuid';
import { SyndicateConfigEntity } from '../../types';

export default function createConfig(customKey?: string, type?: string): SyndicateConfigEntity {
  return {
    key: customKey ? customKey : v4(),
    childKeys: [],
    parentKey: null,
    type,
  };
}
