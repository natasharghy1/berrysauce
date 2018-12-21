import { Component, OnInit } from '@angular/core';
import { User } from '../server/user/shared/user.model';
import { NgForm } from '@angular/forms';
import { UserService } from '../server/user/shared/user.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers: [UserService]
})

export class SignUpComponent implements OnInit {

  user: User;
  //a-z0-9._@hotmail.com (for example)
  emailValidate = "^[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  showsuccessmsg: boolean;
  showerrormsg: string;

  constructor(private userService: UserService) { }

  //When form is initiated
  ngOnInit() {
    //Run clear form function
  }

  

  onSubmit(form: NgForm) {
  this.userService.posting(form.value).subscribe(
    //successmsg
    res => {
      this.showsuccessmsg = true;
      this.resetForm(form);
    },
    //errormsg
    err => {
  if(err.status == 422) {
    this.showerrormsg = err.err.join('<br/>');
  } 
  else
  this.showerrormsg = 'Something is wrong, please contact admin';
});
  }

  //?is form is nullable
resetForm(form: NgForm){
  //Only run this function if form is not null
  this.userService.selectedUser = {
     username: "",
     password: "",
     email: "",
     firstName: "",
     lastName: ""
    };
    form.resetForm();
    this.showerrormsg = '';
  
    }  

}

  
