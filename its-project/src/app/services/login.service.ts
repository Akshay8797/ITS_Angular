import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpParams} from '@angular/common/http'
import { Observable } from 'rxjs';

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

     
  generateUserHomepage(userid:String,password:String):Observable<Object>{

    return this.http.post('http://localhost:8080/user/login' ,{userid,password},{headers:this.httpHeaders,responseType: 'text'});
  
  }

  getSessionId(userid):Observable<Object>{
 
   return this.http.get('http://localhost:8080/user/sessionId',{headers:this.httpHeaders,params:{'userId':userid},responseType: 'text'});
    
  }

  removeSessionId(sessionId):Observable<Object>{

    return this.http.post('http://localhost:8080/user/logout' ,{},{headers:this.httpHeaders.set('auth-token',sessionId),responseType: 'text'});
  
  }

}
