export class Promotion {
    promoId: number;
    promoName: string;
    promoType: string;
    promoPercentage: number;
    promoCode: string;

    constructor(promoId?: number, promoName?: string, promoType?: string, promoPercentage?: number, promoCode?: string){
        this.promoId = promoId;
        this.promoName = promoName;
        this.promoType = promoType;
        this.promoPercentage = promoPercentage;
        this.promoCode = promoCode;
    }
}
