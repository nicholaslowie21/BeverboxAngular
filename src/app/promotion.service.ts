import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { SessionService } from './session.service';
import { Promotion } from './promotion';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  baseUrl: string = "/api/Promotion";

  constructor(private httpClient: HttpClient, private sessionService: SessionService) { }

  getPromotions(): Observable<any> {				
		return this.httpClient.get<any>(this.baseUrl).pipe
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
