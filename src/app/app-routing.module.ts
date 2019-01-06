import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Define router
const myRoots: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(myRoots)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
