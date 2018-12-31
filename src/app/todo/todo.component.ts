import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
//class for list items
  new: string;
  commitstack: any;
  commitcontainer: any;
  
  constructor() { 
    //new item
    this.new;
    //array of items - iniate STACK
    this.commitstack = [];
  }
  
//push new item onto STACK list event
  push(event) {
    //inside the commitment container
    this.commitcontainer = {
      //new commitment
      new: this.new,
      //which is incomplete
      completed: false
    }

    //push onto stack queue, the commitment container
    this.commitstack.push(this.commitcontainer);
    //(which will contain the input - new)
    this.new = '';
    event.preventDefault();
  }
 
  //pop function returning index, when run...
  pop(index) {
    //splice index item from the stack of commits
    this.commitstack.splice(index, 1);
  }

  ngOnInit() {
  }

}