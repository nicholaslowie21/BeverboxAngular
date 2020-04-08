export class Customer {
	
	customerId: number;
	name: string;
	address: string;
	email: string;
	password: string;
	accumulatedCashback: number;
	ccNum: string;
	cvv: number;
	
	constructor(customerId?: number, name?: string, address?: string,email?: string, password?: string,accumulatedCashback?: number,ccNum?: string,cvv?: number){
			this.customerId = customerId;
			this.name = name;
			this.address = address;
			this.email = email;
			this.password = password;
			this.accumulatedCashback = accumulatedCashback;
			this.ccNum = ccNum;
			this.cvv = cvv;
	}
}
