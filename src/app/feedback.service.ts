import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Feedback } from './feedback';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  baseUrl: string ="/api/Feedback";
  constructor(private httpClient: HttpClient) {}

  createNewFeedback(newFeedback: Feedback): Observable<any>
	{
		let createNewFeedbackReq = {
			"newFeedback": newFeedback
		};
		return this.httpClient.put<any>(this.baseUrl, createNewFeedbackReq, httpOptions).pipe
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
