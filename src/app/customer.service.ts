import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Customer } from './customer';



const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  baseUrl: string = "/api/Customer";

  constructor(private httpClient: HttpClient) { }

  customerLogin(email: string, password: string): Observable<any> {
		return this.httpClient.get<any>(this.baseUrl + "/customerLogin?email=" + email + "&password=" + password).pipe
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
