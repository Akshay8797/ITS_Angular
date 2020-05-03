import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable()
export class GetFreeTechPanelService {
  private httpHeaders;
  public params=new HttpParams().set('date',"2020-02-01")
  .set('time',"10:50");
  constructor(private http:HttpClient) {
    this.httpHeaders=new HttpHeaders()
    .set('allow-origin-access-control','*')
    .set('Content-type','application/json')
    .set('auth-token','-39745d5c:')
  
   }
   getTechPanel():Observable<Object> {
    return this.http.get('http://localhost:8080/admin/interviewer/tech/' ,{headers:this.httpHeaders,params:this.params});
   }
   getHrPanel():Observable<Object> {
    return this.http.get('http://localhost:8080/admin/interviewer/hr/' ,{headers:this.httpHeaders,params:this.params});
   }
  ngOnInit(){
    
  }

}
