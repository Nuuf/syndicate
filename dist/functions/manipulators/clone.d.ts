import { SyndicateRootEntity, SyndicateCompositeEntity } from '../../types';
import { Arrange } from '../../constants';
/**
 *
 * @param root
 * @param entity
 * @param arrange
 * @param descendants
 */
export default function clone<T>(root: SyndicateRootEntity, entity: SyndicateCompositeEntity<T>, arrange?: Arrange.START | Arrange.END, descendants?: boolean): SyndicateCompositeEntity<T>;
