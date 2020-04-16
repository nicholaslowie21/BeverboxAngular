import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { SessionService } from './session.service';
import { BevTransaction } from './bev-transaction';
import { SubTransaction } from './sub-transaction';

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  	baseUrl: string = "/api/Transaction";

  	constructor(private httpClient: HttpClient, private sessionService: SessionService) { }

  	getBevTransactions(): Observable<any> {				
		return this.httpClient.get<any>(this.baseUrl + "/bevTransactions?email=" + this.sessionService.getEmail() + "&password=" + this.sessionService.getPassword()).pipe
		(
			catchError(this.handleError)
		);
  	}

  	getSubsTransactions(): Observable<any> {				
		return this.httpClient.get<any>(this.baseUrl + "/subsTransactions?email=" + this.sessionService.getEmail() + "&password=" + this.sessionService.getPassword()).pipe
		(
			catchError(this.handleError)
		);
	}

	createBevTransaction(beverageId: number, promoCode: string, qty: number, cashback: boolean): Observable<any>
	{
		console.log(beverageId + "in trans service");
		let buyBevReq = {
			"email": this.sessionService.getEmail(),
			"password": this.sessionService.getPassword(),
			"bevId": beverageId,
			"promoCode": promoCode,
			"qty": qty,
			"cashback": cashback,
			"custId": this.sessionService.getCurrentCustomer().customerId
		};
		
		return this.httpClient.put<any>(this.baseUrl, buyBevReq, httpOptions).pipe
		(
			catchError(this.handleError)
		);
	}
  
  private handleError(error: HttpErrorResponse) {
		let errorMessage: string = "";
		
		if (error.error instanceof ErrorEvent) 
			errorMessage = "An unknown error has occurred: " + error.error.message;
		else 
			errorMessage = "A HTTP error has occurred: " + `HTTP ${error.status}: ${error.error.message}`;
		
		console.error(errorMessage);
		
		return throwError(errorMessage);		
	}
}
