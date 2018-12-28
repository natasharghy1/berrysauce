import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equation',
  templateUrl: './equation.component.html',
  styleUrls: ['./equation.component.css']
})
export class EquationComponent implements OnInit {
  public speed : number;
  public time : number;
  public distresult : number;
 
  public dstequation(){
      this.distresult = this.speed * this.time
  }

  constructor() { }

  ngOnInit() {
  }

}


