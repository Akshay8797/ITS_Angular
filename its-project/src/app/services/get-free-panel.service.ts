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
    .set('allow-origin-access-control','*')
    .set('Content-type','application/json')
    .set('auth-token','35139f32:1')
    .set('Access-Control-Allow-Credentials','true')
    .set('Access-Control-Allow-Headers','X-Requested-With,content-type')
    .set('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS')
   }
   getTechPanel():Observable<Object> {
    return this.http.get('http://localhost:8080/admin/interviewer/tech/' ,{headers:this.httpHeaders,params:this.params});
   }
   getHrPanel():Observable<Object> {
    return this.http.get('http://localhost:8080/admin/interviewer/hr/' ,{headers:this.httpHeaders,params:this.params});
   }

   sendtoTech(techid):Observable<Object>{
    this.panelparams.set('candidateId',"101").set('date',"2020-02-01")
    .set('time',"10:50").set('interviewerId',techid).set('subject',"hindi");
    return this.http.put('http://localhost:8080/admin/interviewer/totech/' ,{headers:this.httpHeaders,params:this.panelparams})
   }
  ngOnInit(){
  }

}
