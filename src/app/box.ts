import { Beverage } from './beverage';
import { Review } from './review';

export class Box {

    boxId: number;
    boxName: string;
    boxOrigin: string;
    boxDesc: string;
    active: boolean;
    beverages: Beverage[];
    reviews: Review[];

    constructor(boxId?: number, boxName?: string, boxOrigin?: string, boxDesc?: string, active?: boolean) {
            this.boxId = boxId;
            this.boxName = boxName;
            this.boxOrigin = boxOrigin;
            this.boxDesc = boxDesc;
            this.active = active;
    }
}
