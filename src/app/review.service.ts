import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { SessionService } from './session.service';
import { Review } from './review';

const httpOptions = {
	headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})

export class ReviewService {

	baseUrl: string = "/api/Review";


	constructor(private httpClient: HttpClient, private sessionService: SessionService)
	{ 
	}
	
	
	getReviewsByEmail(): Observable<any>
	{
		return this.httpClient.get<any>(this.baseUrl + "/retrieveAllReviews?email=" + this.sessionService.getEmail() + "&password=" + this.sessionService.getPassword()).pipe
		(
			catchError(this.handleError)
		);
	}
	
	
	getReviewsByBox(boxId: number): Observable<any>
	{
		return this.httpClient.get<any>(this.baseUrl + "/retrieveAllReviews/" + boxId + "?email=" + this.sessionService.getEmail() + "&password=" + this.sessionService.getPassword()).pipe
		(
			catchError(this.handleError)
		);
	}
	
	
	createNewReview(review: Review, boxId: number, customerId: number): Observable<any>
	{
		let createNewReviewReq = {
			"review": review,
			"boxId": boxId,
			"customerId": this.sessionService.getCurrentCustomer().customerId
		};
		
		return this.httpClient.put<any>(this.baseUrl, createNewReviewReq, httpOptions).pipe
		(
			catchError(this.handleError)
		);
	}
	
	
	deleteReview(reviewId: number): Observable<any>
	{
		return this.httpClient.delete<any>(this.baseUrl + "/deleteReview/" + reviewId + "?email=" + this.sessionService.getEmail() + "&password=" + this.sessionService.getPassword()).pipe
		(
			catchError(this.handleError)
		);
	}
	
	
	private handleError(error: HttpErrorResponse)
	{
		let errorMessage: string = '';
		
		if(error.error instanceof ErrorEvent)
		{
			errorMessage = 'An unknown error has occurred: ' + error.error.message;
		}
		else
		{
			errorMessage = 'A HTTP error has occurred: ' + `HTTP ${error.status}: ${error.error.message}`;
		}
		
		return throwError(errorMessage)
	}
	
}
