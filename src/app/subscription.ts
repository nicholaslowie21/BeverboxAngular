import { Option } from './option';
import { SubTransaction } from './sub-transaction';
import { Customer } from './customer';

export class Subscription {
    subscriptionId: number;
    startDate: Date;
    endDate: Date;
    active: boolean;
    option: Option;
    customer: Customer;
    transaction: SubTransaction;
    // Not sure whether these entity attributes should be stored as entityId instead

    constructor(subscriptionId?: number, startDate?: Date, endDate?: Date, active?: boolean){
        this.subscriptionId = subscriptionId;
        this.startDate = startDate;
        this.endDate = endDate;
        this.active = active;
    }
}