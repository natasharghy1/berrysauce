import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { User } from './user';
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
    //Check username and password 
    if(this.user.username && this.user.password) {
      this.loginService.validate(this.user).subscribe(result => { 
        
        //fat arrow function - runs a function without the need to define
        //Show result in console log
        console.log('result is ', result);
       
        //If successful then navigate to homepage
        if(result['status'] === 'success') {
          this.router.navigate(['/homepage']);
        } 
        
      else {
        //Send alert as username and password is wrong - we ran the login service and schema
        alert('Wrong username password');
      }
    },
      
        //show error   
        error => {
          console.log('error is ', error);
        });
    }
    
    //else, inputs are empty, so tell the user to fill in inputs
    else {
      alert('Enter your username and password.');
    }
  }
}