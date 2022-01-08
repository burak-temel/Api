import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginResponseModel } from '../models/login-response-model.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseUrl = environment.baseUrl;
  constructor(private httpClient: HttpClient) {}

  login(userName: string, password: string):Observable<LoginResponseModel> {
    
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient
      .post<LoginResponseModel>(
        '/openApi/login?userName=' + userName + '&password=' + password,
        { headers: headers }
      )
  }
}
