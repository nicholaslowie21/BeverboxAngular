import { Injectable } from '@angular/core';

import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
	
  	constructor() { 
	
  	}
  
  	getIsLogin(): boolean {
		if(sessionStorage.isLogin == "true") {
			return true;
		} else {
			return false;
		}
	}

	getCurrentCustomer(): Customer {
		return JSON.parse(sessionStorage.currentCustomer);
	}

	setCurrentCustomer(currentCustomer: Customer): void {		 
		sessionStorage.currentCustomer = JSON.stringify(currentCustomer);
	}

	setIsLogin(isLogin: boolean): void {
		sessionStorage.isLogin = isLogin;
	}

	getEmail(): string {
		return sessionStorage.email;
	}

	setEmail(email: string): void {
		sessionStorage.email = email;
	}
		
	getPassword(): string {
		return sessionStorage.password;
	}

	setPassword(password: string): void {
		sessionStorage.password = password;
	}

	checkAccessRight(path): boolean
	{
		console.log("********** path: " + path);
		
		if(!this.getIsLogin()) {
			if(path == "/index" || path == "/")
				return true;
			else
				return false;
		}

		return true;
	}
}
