import { Subscription } from './subscription';

export class Option {
    optionId: number;
    optionName: string;
    optionDuration: number;
    optionSharing: boolean;
    optionDescription: string;
    optionPrice: number;
    optionActive: boolean;
    optionType: string;
    subscriptions: Subscription[];

    constructor(optionId?: number, optionName?: string, optionDuration?: number, optionSharing?: boolean, optionDescription?: string, optionPrice?: number, optionActive?: boolean, optionType?: string){
        this.optionId = optionId;
        this.optionName = optionName;
        this.optionDuration = optionDuration;
        this.optionSharing = optionSharing;
        this.optionDescription = optionDescription;
        this.optionPrice = optionPrice;
        this.optionActive = optionActive;
        this.optionType = optionType;
    }
}
