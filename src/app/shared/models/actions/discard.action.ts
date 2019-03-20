import { CardActionValidator as validator } from '../CardActionValidator';
import { BasicCardAction } from '../CardAction';

export class DiscardAction extends BasicCardAction {
    validations = [validator.cardShouldHaveOwner, validator.cardShouldBeUsedOnlyByOwner];
    action = () => {
        this.card.owner = null;
    };
}
