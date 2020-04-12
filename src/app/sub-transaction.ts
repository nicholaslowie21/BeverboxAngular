export class SubTransaction {
    subsId: number;
    transId: number;
    cvv: number;
    ccNum: string;
    transDate: Date;
    startDate: Date;
    endDate: Date;
    transAmt: number;
    monthDuration: number;
    active: boolean;

    constructor(subsId?: number, transId?: number, cvv?: number, ccNum? :string,transDate?: Date,startDate?: Date, endDate?: Date,transAmt?:number,monthDuration?: number,active?: boolean){
        this.subsId = subsId;
        this.transId = transId;
        this.cvv = cvv;
        this.ccNum = ccNum;
        this.transDate = transDate;
        this.startDate = startDate;
        this.endDate = endDate;
        this.transAmt = transAmt;
        this.monthDuration = monthDuration;
        this.active = active;
    }
}