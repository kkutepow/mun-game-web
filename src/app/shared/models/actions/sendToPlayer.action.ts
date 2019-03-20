import { CardActionValidator as validator } from '../CardActionValidator';
import { BasicCardAction } from '../CardAction';
import { CardSlot } from '../Card';

export class SendToPlayerAction extends BasicCardAction {
    validations = [validator.cardShouldHaveOwner, validator.cardShouldBeUsedOnlyByOwner];
    action = () => {
        this.card.owner = this.target.id;
        this.card.currentSlot = CardSlot.inHand;
    };
}
