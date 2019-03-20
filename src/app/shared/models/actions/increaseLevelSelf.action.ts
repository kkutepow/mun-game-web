import { CardActionValidator as validator } from '../CardActionValidator';
import { BasicCardAction } from '../CardAction';

export class IncreaseLevelSelfAction extends BasicCardAction {
    validations = [validator.cardShouldHaveOwner, validator.cardShouldBeUsedOnlyByOwner];
    action = () => {
        this.player.increaseLevel(1);
    };
}