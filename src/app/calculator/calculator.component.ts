//This is a component for the mechanisms of a basic calculator
import { Component, OnInit } from '@angular/core';

//The component consists of these files
@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})

//Class for the calculator with containers for each button
export class CalculatorComponent implements OnInit {
//Containers for the inputs
  public number1 : number;
  public number2 : number;
  public result : number;
 
//Mathematical sums for the inputs and result
 public add(){
    this.result = this.number1 + this.number2
 }
  public subtract(){
    this.result = this.number1 - this.number2
  }
  public multiply(){
    this.result = this.number1 * this.number2
  }
  public divide(){
    this.result = this.number1 / this.number2
  }

  ngOnInit() {
  }

}


