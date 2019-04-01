import { CardActionValidator as validator } from '../CardActionValidator';
import { BasicCardAction } from '../CardAction';
import { Player } from '../Player';

export class IncreaseLevelSelfAction extends BasicCardAction {
    validations = [validator.cardShouldHaveOwner, validator.cardShouldBeUsedOnlyByOwner];
    action = () => {
        Player.increaseLevel(this.player, 1);
    };
}