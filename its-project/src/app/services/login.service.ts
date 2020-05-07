import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpParams,HttpErrorResponse } from '@angular/common/http'
import { Observable } from 'rxjs';
import {  throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  public httpHeaders:HttpHeaders;
  public params=new HttpParams();

  constructor(private http:HttpClient) {
    this.httpHeaders=new HttpHeaders()
    .set('allow-origin-access-control','*')
    .set('Content-type','application/json')
    .set('Response-type','text')
     
  }
  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Client Error`;
    } else {
      // Server-side errors
      errorMessage = `Server Refused to connect`;
    }
    return throwError(errorMessage);
  }
     
   generateUserHomepage(userid:string,password:string,sharedValue:string):Observable<Object>{
      return this.http.post('http://localhost:8080/user/login' ,{},
      {headers:this.httpHeaders,responseType:"text",params:
      {'userId':userid,'password':password,'userType':sharedValue}}).pipe(catchError(this.handleError));
      ;
      
    }

  getSessionId(userid):Observable<Object>{
 
   return this.http.get('http://localhost:8080/user/sessionId',{headers:this.httpHeaders,params:{'userId':userid},responseType: 'text'});
    
  }

  removeSessionId(sessionId):Observable<Object>{

    return this.http.post('http://localhost:8080/user/logout' ,{},{headers:this.httpHeaders.set('auth-token',sessionId),responseType: 'text'});
  
  }
  
}
