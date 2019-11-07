import { SyndicateRootEntity, SyndicateCompositeEntity, SyndicateConfigEntity } from '../../types';
import { Arrange } from '../../constants';
/**
 *
 * @param root
 * @param entity
 * @param parent
 * @param arrange
 */
export default function add<T>(root: SyndicateRootEntity, entity: SyndicateCompositeEntity<T>, parent?: SyndicateConfigEntity, arrange?: Arrange.START | Arrange.END): void;
