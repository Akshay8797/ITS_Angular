import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable()
export class GetFreeTechPanelService {
  
  public params=new HttpParams().set('date',"2020-02-02")
  .set('time',"10:40");
  public panelparams;
 
  public httpHeaders:HttpHeaders;
  constructor(private http:HttpClient) {
    this.httpHeaders=new HttpHeaders()
    .set('allow-origin-access-control','*')
    .set('Content-type','application/json')
    .set('auth-token','35139f32:1')
    .set('Access-Control-Allow-withCredentials','true')
    .set('Access-Control-Allow-Headers','X-Requested-With,content-type')
    .set('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE')
    .set('Access-Control-Allow-Origin','*');
   }
   getTechPanel():Observable<Object> {
    return this.http.get('http://localhost:8080/admin/interviewer/tech/' ,{headers:this.httpHeaders,params:this.params});
   }
   getHrPanel():Observable<Object> {
    return this.http.get('http://localhost:8080/admin/interviewer/hr/' ,{headers:this.httpHeaders,params:this.params});
   }

   sendtoTech(techid):Observable<Object>{
    return this.http.put('http://localhost:8080/admin/totech/' ,{},{headers:this.httpHeaders,params:{'candidateId':"101",'date':"2020-02-02",'time':"10:50",'interviewerId':techid,'subject':"hindi"}});
    
   }

   shareDetails(id):Observable<Object>{
     console.log(typeof(id),id+' in service');
     return this.http.put('http://localhost:8080/admin/share/',{},{headers:this.httpHeaders,params:{'candidateId':"101",'number':id}});
   }
  ngOnInit(){
  }

}
