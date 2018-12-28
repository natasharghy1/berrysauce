import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { TodoComponent } from './todo/todo.component';
import { HeroesComponent } from './heroes/heroes.component';
import { EquationComponent } from './equation/equation.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { GeographyComponent } from './geography/geography.component';


const myRoots: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomepageComponent },
  { path: 'one', component: TodoComponent },
  { path: 'sci' , component: HeroesComponent},
  { path: 'math', component: EquationComponent },
  { path: 'calc', component: CalculatorComponent },
  { path: 'geo', component: GeographyComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    TodoComponent,
    HeroesComponent,
    EquationComponent,
    CalculatorComponent,
    GeographyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(myRoots),
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
