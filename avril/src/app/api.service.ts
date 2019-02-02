import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { User } from './models/user.model';

const httpOptions = {
	headers: new HttpHeaders({
		'Content-Type': 'application/json'
	})	
};

const apiUrl = "https://reqres.in/api/users";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private handleError<T> (operation = 'operation', result?: T) {
  	return (error: any): Observable<T> => {
  		console.log(">>>||", error);
  		return of(result as T);
  	}
  }


  firstClick() {
  	return console.log("service first click");
  }

  getUsers(): Observable<User[]> {
  	return this.http.get<User[]>(apiUrl)
  		.pipe(
  			tap(heroes => console.log("fetched products")),
  			catchError(this.handleError("getUsers", []))
  		);
  }

  addUser(_user): Observable<User> {
  	return this.http.post<User>(apiUrl, _user, httpOptions).pipe(
  		catchError(this.handleError<User>('AddUser'))
  	);
  }

}
