import { Injectable } from '@angular/core';

import { Customer } from './customer';
import { CustomerService } from './customer.service';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
	
  	constructor(private customerService: CustomerService) { 
	
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

	updateCustomer(): void {
		
		this.customerService.updateCustomer(this.getEmail(), this.getPassword()).subscribe(
				response => {										
					let customer: Customer = response.customer;				
					
					if(customer != null)
					{
						this.setCurrentCustomer(customer);
						this.setEmail(customer.customerEmail);
						this.setPassword(customer.customerPassword);
					}
				},
				error => {
					console.log("Something went wrong while updating customer! The error is " + error);
				}
			);
	}

}
