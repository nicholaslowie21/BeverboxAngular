import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { SessionService } from './session.service';
import { BevTransaction } from './bev-transaction';

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  baseUrl: string = "/api/Transaction";

  constructor(private httpClient: HttpClient, private sessionService: SessionService) { }

  getBevTransactions(): Observable<any>
	{				
		return this.httpClient.get<any>(this.baseUrl + "/bevTransactions?email=" + this.sessionService.getEmail() + "&password=" + this.sessionService.getPassword()).pipe
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
