//This is the component for the Physics d=s*t equation
import { Component, OnInit } from '@angular/core';

//Obtain other files this component is related to
@Component({
  selector: 'app-equation',
  templateUrl: './equation.component.html',
  styleUrls: ['./equation.component.css']
})

//Class for the containers for sums
export class EquationComponent implements OnInit {

//Speed, distance and time value containers
    public speed : number;
    public time : number;
    public distresult : number;
 
//Equation that will be applied to the button
    public dstequation(){
      this.distresult = this.speed * this.time
    }

  constructor() { }

  ngOnInit() {
  }

}


