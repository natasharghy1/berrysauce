import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  selectedUser: User = {
    username: '',
    password: '',
    email: '',
    firstName: '',
    lastName: ''
  }

  //post request to nodejs api
  constructor(private http: HttpClient) { }
    
    posting(user: User){
     return this.http.post(environment.apiBaseUrl+'/register', user);
    }

}
