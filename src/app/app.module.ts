import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScienceComponent } from './science/science.component';
import { MathsComponent } from './maths/maths.component';
import { FruitComponent } from './fruit/fruit.component';
import { FruitQuizComponent } from './fruit/fruit-quiz/fruit-quiz.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './user/api/routes/index/index.component';
import { UsersComponent } from './user/api/routes/users/users.component';



const myRoots: Routes = [
    //If path is ... add component
    {path: 'register', component: SignUpComponent},
    { path: 'fruits', component: FruitComponent },
    { path: 'fruits-quiz', component: FruitQuizComponent },
    { path: 'science', component: ScienceComponent },
    { path: 'maths', component: MathsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ScienceComponent,
    MathsComponent,
    FruitComponent,
    FruitQuizComponent,
    UserComponent,
    SignUpComponent,
    SignInComponent,
    HomeComponent,
    IndexComponent,
    UsersComponent
 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(myRoots, {enableTracing: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
