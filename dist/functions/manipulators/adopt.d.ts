import { SyndicateRootEntity, SyndicateConfigEntity } from '../../types';
import { Arrange } from '../../constants';
export default function adopt(root: SyndicateRootEntity, entity: SyndicateConfigEntity, adopter: SyndicateConfigEntity, arrange?: Arrange.START | Arrange.END): void;
