import { SyndicateRootEntity, SyndicateCompositeEntity } from '../../types';
import { Arrange } from '../../constants';
export default function clone<T>(root: SyndicateRootEntity, entity: SyndicateCompositeEntity<T>, arrange?: Arrange.START | Arrange.END): SyndicateCompositeEntity<T>;
