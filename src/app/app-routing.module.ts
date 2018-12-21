import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserComponent } from './server/user/user.component';

const myRoots: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(myRoots)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
