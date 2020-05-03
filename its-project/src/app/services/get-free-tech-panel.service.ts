import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable()
export class GetFreeTechPanelService {
  private httpHeaders;
  
  constructor(private http:HttpClient) {
    this.httpHeaders=new HttpHeaders()
    .set('allow-origin-access-control','*')
    .set('Content-type','application/json')
    .set(' date ','2020-02-2')
  
   }
   getTechPanel():Observable<Object> {
    return this.http.get('http://localhost:8080/admin/interviewer/tech' ,{headers:this.httpHeaders});
   }
  ngOnInit(){
    
  }

}
