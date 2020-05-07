import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ResetPasswordService {
    userId: string;
    curPassword: string;
    newPassword: string;
    constructor(private _httpClient: HttpClient) {
    }

    reset(User: { userid: string; password: string; }, resetParam: HttpParams): Observable<any> {
        let httpHeaders = new HttpHeaders()
            .set('allow-origin-access-control', '*')
            .set('Content-type', 'application/json');
        return this._httpClient.post('http://localhost:8080/user/resetpassword',
            JSON.stringify(User), { headers: httpHeaders, params: resetParam });
    }
}