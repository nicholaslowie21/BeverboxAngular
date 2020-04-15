import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SessionService } from './session.service';
import { Customer } from './customer';

const httpOptions = {
	headers: new HttpHeaders({'Content-Type': 'application/json'})
} 


@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  baseUrl: string = "api/Subscription"

  constructor(private httpClient: HttpClient, private sessionService: SessionService) { }

  retrieveCustomerSubscriptions(): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl).pipe
    (
      catchError(this.handleError)
    );
  }

  createSubscription(promoCode: string, cashback: boolean, optId: number): Observable<any>
	{		
		let createSubReq = {
			"email": this.sessionService.getEmail(),
			"password": this.sessionService.getPassword(),
      "promoCode": promoCode,
      "cashback": cashback,
			"optId": optId,
      "custId": this.sessionService.getCurrentCustomer().customerId
		};
    
		return this.httpClient.put<any>(this.baseUrl + + "/createSubscription", createSubReq, httpOptions).pipe
		(
			catchError(this.handleError)
		);
	}

  private handleError(error: HttpErrorResponse)
	{
		let errorMessage: string = "";
		
		if (error.error instanceof ErrorEvent) 
		{		
			errorMessage = "An unknown error has occurred: " + error.error.message;
		} 
		else 
		{		
			errorMessage = "A HTTP error has occurred: " + `HTTP ${error.status}: ${error.error.message}`;
		}
		
		console.error(errorMessage);
		
		return throwError(errorMessage);		
	}

}
