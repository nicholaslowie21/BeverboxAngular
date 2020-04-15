import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

const httpOptions = {
	headers: new HttpHeaders({'Content-Type': 'application/json'})
} 

@Injectable({
  providedIn: 'root'
})
export class OptionService {

  baseUrl: string ="/api/Option";

  constructor(private httpClient: HttpClient) { }

  retrieveAllOptions(): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl).pipe
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
