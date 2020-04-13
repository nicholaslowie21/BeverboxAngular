import {Component, ViewEncapsulation} from '@angular/core';
import { Beverage } from './beverage';

export class Box {

    boxId: number;
    boxName: string;
    boxOrigin: string;
    boxDesc: string;
    active: boolean;
    beverages: Beverage[];

    constructor(boxId?: number, boxName?: string, boxOrigin?: string, boxDesc?: string, active?: boolean) {
            this.boxId = boxId;
            this.boxName = boxName;
            this.boxOrigin = boxOrigin;
            this.boxDesc = boxDesc;
            this.active = active;
    }
}
