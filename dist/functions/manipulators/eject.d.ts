import { SyndicateRootEntity, SyndicateConfigEntity } from '../../types';
import { Arrange } from '../../constants';
/**
 *
 * @param root
 * @param entity
 * @param arrange
 */
export default function eject(root: SyndicateRootEntity, entity: SyndicateConfigEntity, arrange?: Arrange.START | Arrange.END): void;
