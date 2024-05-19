import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserCred } from '../Components/login-page/login-page.component';
import { Observable } from 'rxjs';
import { environment } from '../../../envoirnment';
@Injectable({
    providedIn: 'root'
})
export class LoginServiceService {

    apiKey = environment.apiKey;
    apiUrl = environment.apiUrl;
    constructor(private httpClient: HttpClient) {
    }

    login(data: UserCred): Observable<any> {
        //   console.log(data);
        const userDetails = {
            email: data.userName,
            password: data.password
        }
        const header = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        return this.httpClient.post(`${this.apiUrl}login`, userDetails, { headers: header, responseType: 'text' })
    }
}
