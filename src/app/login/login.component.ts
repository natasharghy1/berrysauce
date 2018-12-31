import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { User } from '../models/user';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ LoginService ]
})
export class LoginComponent {
  //class for user, is declared in ../models/user.ts
  public user : User;
 
//Create constructor for the login service, create the login service and call router function
  constructor(private loginService: LoginService, private router: Router) {
      this.user = new User();
  }
//Validate function 
  validate() {
    //Check username and password against mongodb users
    if(this.user.username && this.user.password) {
        this.loginService.validate(this.user).subscribe(result => {
        //Show result in console log
        console.log('result is ', result);
        //If successful then navigate to homepage
        if(result['status'] === 'success') {
          this.router.navigate(['/homepage']);
        } else {
          //Send alert
          alert('Wrong username password');
        }
         
      }, error => {
        console.log('error is ', error);
      });
    } else {
        alert('enter user name and password');
    }
  }
 
}