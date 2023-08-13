import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { User } from '../models/user';
import { environment } from 'src/enviroments/enviroment.prod';

@Injectable({providedIn:'root'})

export class AuthService{

    constructor(private http: HttpClient){

    }
    isLoggedIn(){
        return !!localStorage.getItem('token');
    }
    login(username: string, password: string) {
        //return this.http.post(`${environment.apiUrl}/auth/login`, { username, password }).pipe(catchError(this.handleError));
        return this.http.post(`${environment.apiUrl}/auth/login`, { username, password });
    }

   

    private handleError(error: HttpErrorResponse) {
        if (error.status === 0) {
          // A client-side or network error occurred. Handle it accordingly.
          console.error('Ha ocurrido el error:', error.error);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong.
          console.error(
            `Se encontro el error ${error.status}, la respuesta es: `, error.error);
        }
        // Return an observable with a user-facing error message.
        return throwError(() => new Error('Ha ocurrido un error.'));
      }




   /* private userSubject: BehaviorSubject<User | null>;
    public user: Observable<User | null>;

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        this.userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
        this.user = this.userSubject.asObservable();
    }

    public get userValue() {
        return this.userSubject.value;
    }

    login(username: string, password: string) {
        return this.http.post<User>(`${environment.apiUrl}/auth/login`, { username, password })
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));
                this.userSubject.next(user);
                console.log(user.token,user.username);
                return user;
            }));
    }

    logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('user');
        this.userSubject.next(null);
        this.router.navigate(['/login']);
    }

    register(user: User) {
        return this.http.post(`${environment.apiUrl}/register`, user);
    }*/
}