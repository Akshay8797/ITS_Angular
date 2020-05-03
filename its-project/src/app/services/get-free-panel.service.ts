import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable()
export class GetFreeTechPanelService {
  
  public params=new HttpParams().set('date',"2020-02-01")
  .set('time',"10:50");
  public panelparams=new HttpParams();
  public httpHeaders:HttpHeaders;
  constructor(private http:HttpClient) {
    this.httpHeaders=new HttpHeaders()
    .set('Access-Control-Allow-Origin','*')
    .set('Content-type','application/json')
    .set('auth-token','2506bf41:1')
    }
   getTechPanel():Observable<Object> {
    return this.http.get('http://localhost:8080/admin/interviewer/tech/' ,{headers:this.httpHeaders,params:this.params});
   }
   getHrPanel():Observable<Object> {
    return this.http.get('http://localhost:8080/admin/interviewer/hr/' ,{headers:this.httpHeaders,params:this.params});
   }

   sendtoTech(techid):Observable<Object>{
    this.panelparams.set('candidateId',"1").set('date',"2020-02-01")
    .set('time',"10:50").set('interviewerId',techid).set('subject',"hindi");
    return this.http.put('http://localhost:8080/admin/toTech/',{'candidateId'},{headers:this.httpHeaders})
   }
  ngOnInit(){
  }

}
