import { CardActionValidator as validator } from '../CardActionValidator';
import { BasicCardAction } from '../CardAction';
import { CardSlot } from '../Card';

export class AddRaceAction extends BasicCardAction {
    validations = [
        validator.cardShouldHaveOwner,
        validator.cardShouldBeUsedOnlyByOwner,
        validator.cardShouldHaveRaceMeaning,
        validator.userShouldBeReadyForRace,
    ];
    action = () => {
        this.card.currentSlot = CardSlot.races;
    };
}