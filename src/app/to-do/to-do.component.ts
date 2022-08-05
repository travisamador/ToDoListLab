import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { AppComponent } from '../app.component';
import { ToDo } from '../to-do';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  filter: string = "";
  

  constructor() { }

  ngOnInit(): void {
  }
  title:string = "ToDo List";
  description:string = "A list to keep track of your tasks"

  toDoList:ToDo[] = [
    {
      task: "Wash Clothes",
      completed: true,
      editMode: false
    },
    {
      task: "Wash Dishes",
      completed: false,
      editMode: false
    },
    {
      task: "Take Trash Out",
      completed: true,
      editMode: false
    },
    {
      task: "Fold Clothes",
      completed: true,
      editMode: false
    },
    {
      task: "Put Clothes In Dresser",
      completed: false,
      editMode: false
    },
    {
      task: "Return Bottles and Cans",
      completed: true,
      editMode: false
    },
    {
      task: "Wash Car",
      completed: false,
      editMode: false
    },
    {
      task: "Buy Groceries",
      completed: false,
      editMode: false
    },
    {
      task: "Car Oil Change",
      completed: true,
      editMode: false
    }
  ];

  filterList(filter:string):ToDo[] {
    let filteredList: ToDo[] = [];
    this.toDoList.forEach((t:ToDo) => {
      if(t.task.toLowerCase().includes(filter.toLowerCase()))
      {
        filteredList.push(t);
      }});
      return filteredList;
  }

  completeTask(task:ToDo):void{
    task.completed = true;
  }

  changeCompleted(task:ToDo){
    task.completed = !task.completed;
    task.editMode = false;
  }

  addTask(form:NgForm):void{
    let newTask: ToDo ={
      task: form.form.value.task,
      completed: false,
      editMode: false
    };
    this.toDoList.push(newTask);
  }

  editTask(task: ToDo,form:NgForm):void{
    task.task = form.form.value.task;
    task.editMode = false;
  }

  toggleEditMode(task: ToDo):void{
    task.editMode = !task.editMode
  }

  allDone():boolean{
   return !this.toDoList.map(t=> t.completed).includes(false);
  }

  removeTask(task:ToDo):void{
    this.toDoList.splice(this.toDoList.indexOf(task), 1);
  }

}
