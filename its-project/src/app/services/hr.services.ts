import {Injectable} from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class HRCandidateService{
    constructor(private _httpClient:HttpClient){
    }
    getHRCandidates():Observable<Object>{
        let httpHeaders=new HttpHeaders()
        .set('auth-token',sessionStorage.getItem('sessionId'))
        .set('allow-origin-access-control','*')
        .set('Content-type','application/json');

        return this._httpClient.get('http://localhost:8080/hr/',{headers:httpHeaders});
    }
    giveHRRating(interviewId,interviewScheduleObj):Observable<Object>{
        let httpHeaders=new HttpHeaders()
        .set('auth-token',sessionStorage.getItem('sessionId'))
        .set('allow-origin-access-control','*')
        .set('Content-type','application/json');

        return this._httpClient.post(`http://localhost:8080/hr/${interviewId}`, JSON.stringify(interviewScheduleObj), {headers: httpHeaders});
    }
    getResults():Observable<Object>{
        let httpHeaders=new HttpHeaders()
        .set('auth-token',sessionStorage.getItem('sessionId'))
        .set('allow-origin-access-control','*')
        .set('Content-type','application/json');

    return this._httpClient.get('http://localhost:8080/hr/result',{headers: httpHeaders});
    }
}