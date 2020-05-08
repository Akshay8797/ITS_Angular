import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable()
export class GetFreeTechPanelService {
  
  public panelparams;

  public httpHeaders:HttpHeaders;

  public sessionVariable;

  constructor(private http:HttpClient) {
    this.httpHeaders=new HttpHeaders()
    .set('allow-origin-access-control','*')
    .set('Content-type','application/json')
    .set('auth-token',sessionStorage.getItem('sessionId'))
    .set('Access-Control-Allow-withCredentials','true')
    .set('Access-Control-Allow-Headers','X-Requested-With,content-type')
    .set('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE')
    .set('Access-Control-Allow-Origin','*');
   }

   getSearch(Candidate):Observable<Object> {
    return this.http.post('http://localhost:8080/admin/search' ,JSON.stringify(Candidate),{headers:this.httpHeaders});
   }
   addUserProfile(Candidate,id):Observable<Object>
   {
         return this.http.post('http://localhost:8080/admin/addCandidateUserProfile' ,JSON.stringify(Candidate),{headers:this.httpHeaders,params:{'candidateId':id}});
   }

   addCandidate(Candidate):Observable<Object> {
    return this.http.post('http://localhost:8080/admin/addCandidate' ,JSON.stringify(Candidate),{headers:this.httpHeaders});
   }
   

   getTechPanel(date,time):Observable<Object> {
    return this.http.get('http://localhost:8080/admin/interviewer/tech/' ,{headers:this.httpHeaders,params:{'date':date,'time':time}});
   }
   getHrPanel(date,time):Observable<Object> {
    return this.http.get('http://localhost:8080/admin/interviewer/hr/' ,{headers:this.httpHeaders,params:{'date':date,'time':time}});
   }

   getEligibleCandidate():Observable<Object>{
    return this.http.get('http://localhost:8080/admin/techCleared' ,{headers:this.httpHeaders});
   }
   
   getRatings(interviewId):Observable<Object>{
    return this.http.get('http://localhost:8080/admin/rating/' ,{headers:this.httpHeaders,params:{'interviewId':interviewId,responseType: 'text'}});
   }

   getEligibleCandidateForTech():Observable<Object>{
     return this.http.get('http://localhost:8080/admin/techeligible',{});
   }

   sendtoTech(id,date,time,techid,subject):Observable<Object>{
    console.log(this.sessionVariable);
    return this.http.put('http://localhost:8080/admin/toTech' ,{},
    {headers:this.httpHeaders,params:{'candidateId':id,'date':date,'time':time,'interviewerId':techid,'subject':subject}});
   }

  sendtoHr(id,date,time,hrid):Observable<Object>{
      return this.http.put('http://localhost:8080/admin/toHr' ,{},
      {headers:this.httpHeaders,params:{'interviewId':id,'date':date,'time':time,'empHrId':hrid}})
     }
  setShareResult(interviewId,shareDetailsValue){
    return this.http.post('http://localhost:8080/admin/results/share' ,{},{headers:this.httpHeaders,params:{'interviewId':interviewId,'shareResult':shareDetailsValue}});
  }
  setResult(interviewId,result):Observable<Object>{
    return this.http.post('http://localhost:8080/admin/results/set' ,{},{headers:this.httpHeaders,params:{'interviewId':interviewId,'result':result}});
  
  }
   shareDetailsTech(id,shareValue):Observable<Object>{
     console.log(typeof(id),id+' in service');
     return this.http.put('http://localhost:8080/admin/share/tech',{},{headers:this.httpHeaders,params:{'id':id,'number':shareValue}});
   }
   shareDetailsHr(id,shareValue):Observable<Object>{
    console.log(typeof(id),id+' in service');
    return this.http.put('http://localhost:8080/admin/share/hr',{},{headers:this.httpHeaders,params:{'id':id,'number':shareValue}});
  }

  getAllRatedCandidates():Observable<Object>{
    return this.http.get('http://localhost:8080/admin/getRatedCandidates',{headers:this.httpHeaders});
   
  }

  setSessionVariable(variable){
    this.sessionVariable=variable;
    console.log(this.sessionVariable)
  }
  ngOnInit(){
  }

}
