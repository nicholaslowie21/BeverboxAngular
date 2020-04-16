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

    constructor(optionId?: number, name?: string, duration?: number, sharing?: boolean, description?: string, price?: number, type?: string){
        this.optionId = optionId;
        this.name = name;
        this.duration = duration;
        this.sharing = sharing;
        this.description = description;
        this.price = price;
        this.type = type;
    }
}
