import { Component, OnInit } from '@angular/core';
import { Part } from './cell.class';
import { PARTS } from './cell.parts';

@Component({
  selector: 'app-biology',
  templateUrl: './biology.component.html',
  styleUrls: ['./biology.component.css']
})
export class BiologyComponent implements OnInit {

  //for-loop let part of parts = items in the array PARTS 
  parts = PARTS;
  //cellParts = class Part
  cellParts: Part;

  constructor() { }

  ngOnInit() {}
  //when selecting which part the user wants to see, display said part as an instance of class Part
  onSelect(part: Part): void {
    //a specific part specified is being shown
    this.cellParts = part;
  }

}
