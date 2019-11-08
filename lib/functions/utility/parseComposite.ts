import { SyndicateCompositeEntity, UnparsedSyndicateCompositeEntity } from "../../types";

export default function parseComposite<T>(unparsed: UnparsedSyndicateCompositeEntity): SyndicateCompositeEntity<T> {
    return {
        config: JSON.parse(unparsed.config),
        data: JSON.parse(unparsed.data)
    }
}