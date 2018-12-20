import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user.model';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  user: User;
  //a-z0-9._@hotmail.com (for example)
  emailValidate = "^[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,4}$";


  constructor() { }

  //When form is initiated
  ngOnInit() {
    //Run clear form function
    this.clearForm();
  }

  //?is form is nullable
  clearForm(form?: NgForm){

  //Only run this function if form is not null
  if(form != null)
    form.reset();
    this.user = {
     username: "",
     password: "",
     email: "",
     firstName: "",
     lastName: ""
    }

  }

}
