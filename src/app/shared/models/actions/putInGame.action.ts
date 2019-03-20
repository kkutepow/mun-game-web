import { CardActionValidator as validator } from '../CardActionValidator';
import { BasicCardAction } from '../CardAction';
import { CardSlot } from '../Card';

export class PutInGameAction extends BasicCardAction {
    validations = [validator.cardShouldHaveOwner, validator.cardShouldBeUsedOnlyByOwner, validator.cardShouldBeInHand];
    action = () => {
        this.card.currentSlot = CardSlot.inGame;
    };
}
