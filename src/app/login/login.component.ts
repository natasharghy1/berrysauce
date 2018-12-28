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
 
  public user : User;
 
  constructor(private loginService: LoginService, private router: Router) {
      this.user = new User();
  }
 
  validate() {
    if(this.user.username && this.user.password) {
        this.loginService.validate(this.user).subscribe(result => {
        console.log('result is ', result);
        if(result['status'] === 'success') {
          this.router.navigate(['/homepage']);
        } else {
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