import { Subscription } from './subscription';

export class Option {
    optionId: number;
    name: string;
    duration: number;
    sharing: boolean;
    description: string;
    price: number;
    type: string;
    subscriptions: Subscription[];
    priceSharing: number;
    sharingOptionId: number

    constructor(optionId?: number, name?: string, duration?: number, sharing?: boolean, description?: string, price?: number, type?: string, priceSharing?: number, sharingOptionId?: number){
        this.optionId = optionId;
        this.name = name;
        this.duration = duration;
        this.sharing = sharing;
        this.description = description;
        this.price = price;
        this.type = type;
        this.priceSharing = 0;
        this.sharingOptionId = 0;
    }
}
