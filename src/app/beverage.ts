export class Beverage {

    beverageId: number;
    beverageName: string;
    beverageDesc: string;
    country: string;
    type: string;
    price: number;
    quantityOnHand: number;
    maxPurchase: number;
    limitedEdition: boolean;
    active: boolean;


    constructor(beverageId?: number,
        beverageName?: string,
        beverageDesc?: string,
        country?: string,
        type?: string,
        price?: number,
        quantityOnHand?: number,
        maxPurchase?: number,
        limitedEdition?: boolean,
        active?: boolean) {
            
            this.beverageId = beverageId;
            this.beverageName = beverageName;
            this.beverageDesc = beverageDesc;
            this.country = country;
            this.type = type;
            this.price = price;
            this.quantityOnHand = quantityOnHand;
            this.maxPurchase = maxPurchase;
            this.limitedEdition = limitedEdition;
            this.active = active;
        }

    }
