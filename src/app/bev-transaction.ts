export class BevTransaction {

    cvv: number;
    ccNum: string;
    qty: number;
    transDate: Date;
    transAmt: number;
    transId: number;
    bevName: string;

    constructor(cvv?: number, ccNum?: string, qty?: number, transDate?: Date, transAmt?: number, transId?: number, bevName?: string){
        this.cvv = cvv;
        this.ccNum = ccNum;
        this.qty = qty;
        this.transDate = transDate;
        this.transAmt = transAmt;
        this.transId = transId;
        this.bevName = bevName;
    }
}
