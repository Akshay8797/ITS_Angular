import {Injectable} from '@angular/core';
import { HttpHeaders, HttpClient} from '@angular/common/http';
import{Observable} from 'rxjs';

@Injectable()
export class TechPanelService{
    constructor(private _httpClient: HttpClient){
    }
    getAllInterviewCandidateList():Observable<Object>{
        let httpHeaders=new HttpHeaders()
        .set('auth-token',sessionStorage.getItem('sessionId'))
        .set('allow-origin-access-control','*')
        .set('Content-type','application/json');

    return this._httpClient.get('http://localhost:8080/tech',{headers: httpHeaders});
    }
    giveTechRating(interviewId,interviewScheduleObj):Observable<Object>{
        let httpHeaders=new HttpHeaders()
        .set('auth-token',sessionStorage.getItem('sessionId'))
        .set('allow-origin-access-control','*')
        .set('Content-type','application/json');

        return this._httpClient.post(`http://localhost:8080/tech/${interviewId}`, JSON.stringify(interviewScheduleObj), {headers: httpHeaders});
    }
    getResults():Observable<Object>{
        let httpHeaders=new HttpHeaders()
        .set('auth-token',sessionStorage.getItem('sessionId'))
        .set('allow-origin-access-control','*')
        .set('Content-type','application/json');

    return this._httpClient.get('http://localhost:8080/tech/result',{headers: httpHeaders});
    }
}
