/* eslint-disable @typescript-eslint/no-explicit-any */
import { SyndicateRootEntity, SyndicateCompositeEntity, UnparsedCompositeEntity } from '../../types';
import { getConfig, getData } from '.';

export default function getComposite<T>(
  root: SyndicateRootEntity,
  key: string,
  noParse?: false
): SyndicateCompositeEntity<T>;
export default function getComposite(root: SyndicateRootEntity, key: string, noParse?: true): UnparsedCompositeEntity;
export default function getComposite(root: SyndicateRootEntity, key: string, noParse?: boolean): any {
  if (noParse) {
    return {
      config: getConfig(root, key, true),
      data: getData(root, key, true),
    };
  }
  return {
    config: getConfig(root, key),
    data: getData(root, key, false),
  };
}
