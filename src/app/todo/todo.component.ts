import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import {Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  user2: any;
  params: any;
  check: []
  public todos:any = [];
  public completed :any = [];
  text: any

  constructor(public route: ActivatedRoute) {
    this.todos = [];
    this.completed  = [];

  }
  ngOnInit() {

    this.route.queryParams.subscribe(queryParams => {
      
      this.user2 = queryParams.user;
      console.log("todo user",this.user2)
    })
    // // params.subscribe(params => {
    //   this.user2 = params.user;
    //   console.log(this.user2)
    // })
  }
  
  addTask(data:any) {
   
    var index1 = this.todos.findIndex(function (item) { return (item.text==data) })
    var index2 = this.completed.findIndex(function (item) { return (item.text==data) })
    console.log("find index1 ===>",index1)
    console.log("find index2 ===>",index2)
    
    if (index1 > -1 || index2 > -1) {
      console.log("error")
      alert("duplicate data pass please check")
    }
     else {
      this.todos.push({text:data})
      console.log("push",this.todos)

    }
    // if(this.todos.length == -1){
    //   var task1= "no task";
    // }
  }
  // addTask(todos: any) {
  // // if (todos === "") return;
  //   this.todos.map(function(item){
  //     var existItem = this.check.find(x=>x.text==item.text);
  //     if(existItem)
  //      console.log("item already exist");
  //     else
  //     {
  //      this.todos.push({
  //        text:todos});
  //        console.log("else");
  //   }
   
  // }
  //   );
    
    // this.todos.push({
    //   text : todos
      
    // });

    // console.log("addTask method",this.todos)  
    
  // }



 

  onDrop(event: CdkDragDrop<string[]>) {
    console.log("todos array----->",this.todos)  
    console.log("completed array----->",this.completed)  
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data,
        event.previousIndex,
        event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex, event.currentIndex);
    }
  }
  }



  
  

