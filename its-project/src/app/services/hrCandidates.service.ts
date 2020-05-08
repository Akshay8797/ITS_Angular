import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HrCandidatesService { 
    constructor(private _httpClient: HttpClient) {
    }

    getHrCandidates(): Observable<Object> {
        let httpHeaders = new HttpHeaders()
        .set('allow-origin-access-control', '*')
        .set('Content-type', 'application/json');
        
        return this._httpClient.get('http://localhost:8080/hr', {headers: httpHeaders});
    }
}