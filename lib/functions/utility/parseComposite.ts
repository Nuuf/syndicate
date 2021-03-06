import { SyndicateCompositeEntity, UnparsedSyndicateCompositeEntity } from '../../types';

export default function parseComposite<T, C>(
  unparsed: UnparsedSyndicateCompositeEntity
): SyndicateCompositeEntity<T, C> {
  return {
    config: JSON.parse(unparsed.config),
    data: JSON.parse(unparsed.data),
  };
}
