import { Component, OnInit } from '@angular/core';
import { Part } from './cell.class';
import { PARTS } from './cell.parts';

@Component({
  selector: 'app-biology',
  templateUrl: './biology.component.html',
  styleUrls: ['./biology.component.css']
})
export class BiologyComponent implements OnInit {

  parts = PARTS;
  cellParts: Part;

  constructor() { }

  ngOnInit() {}

  onSelect(part: Part): void {
    this.cellParts = part;
  }

}
