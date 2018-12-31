//This is the parent App module
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms'; 

//My Components that I have created using "ng g c NameofComponent" with AngularCLI
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { TodoComponent } from './todo/todo.component';
import { HeroesComponent } from './heroes/heroes.component';
import { EquationComponent } from './equation/equation.component';
import { CalculatorComponent } from './calculator/calculator.component';

//The routing of the application, which component is present on which page. Function called from app-routing.module.ts
const myRoots: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomepageComponent },
  { path: 'one', component: TodoComponent },
  { path: 'sci' , component: HeroesComponent},
  { path: 'math', component: EquationComponent },
  { path: 'calc', component: CalculatorComponent }
];

//Child module declarations
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    TodoComponent,
    HeroesComponent,
    EquationComponent,
    CalculatorComponent
  ],

//These imports add additional functions to the application
  imports: [
    BrowserModule,
    AppRoutingModule,
    //Routing module with my route function
    RouterModule.forRoot(myRoots),
    //This module allows forms
    FormsModule,
    //HttpClientModule will allow the application to communicate with a client.
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
