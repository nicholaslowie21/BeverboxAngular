export class Customer {
	
	customerId: number;
	customerName: string;
	address: string;
	customerEmail: string;
	customerPassword: string;
	accumulatedCashback: number;
	customerCCNum: string;
	customerCVV: number;

	constructor(customerId?: number, customerName?: string, address?: string, customerEmail?: string, customerPassword?: string, accumulatedCashback?: number,customerCCNum?: string,customerCVV?: number){
			this.customerId = customerId;
			this.customerName = customerName;
			this.address = address;
			this.customerEmail = customerEmail;
			this.customerPassword = customerPassword;
			this.accumulatedCashback = accumulatedCashback;
			this.customerCCNum = customerCCNum;
			this.customerCVV = customerCVV;
	}
}
