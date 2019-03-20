import { CardActionValidator as validator } from '../CardActionValidator';
import { BasicCardAction } from '../CardAction';

export class EquipAction extends BasicCardAction {
    validations = [
        validator.cardShouldHaveOwner,
        validator.cardShouldBeUsedOnlyByOwner,
        validator.cardShouldBeEquipment,
        validator.cardShouldBeInHandOrGame,
        validator.cardShouldBeCompatibleWithClass,
        validator.cardShouldBeCompatibleWithRace,
    ];
    action = () => {
        this.card.currentSlot = this.card.requiredSlot;
    };
}
