import { CardActionValidator as validator } from '../CardActionValidator';
import { BasicCardAction } from '../CardAction';
import { CardSlot } from '../Card';

export class AddClassAction extends BasicCardAction {
    validations = [
        validator.cardShouldHaveOwner,
        validator.cardShouldBeUsedOnlyByOwner,
        validator.cardShouldHaveClassMeaning,
        validator.userShouldBeReadyForClass,
    ];
    action = () => {
        this.card.currentSlot = CardSlot.classes;
    };
}