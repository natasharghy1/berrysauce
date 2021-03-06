import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable()
export class LoginService {
 
  constructor(private http: HttpClient){}
     
  validate(user: User) {
    return this.http.post('./',{
      username : user.username,
      password : user.password
    });
  }
 
}