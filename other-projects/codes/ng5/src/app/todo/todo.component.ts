import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';

import {Todo} from './todo';
import {TodoService } from './todo.service';

export enum SaveMode{
  None,
  New,
  Edit
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  formGroup: FormGroup;
  todos: Todo[];
  saveMode: SaveMode =SaveMode.None;
  headerText:string;

  constructor(private todoService:TodoService, private formBuilder: FormBuilder) { 

    this.formGroup = formBuilder.group({
      'id':'',
      'name': '',
      'due': '',
      'done': '',
      'notes': ''
    })
  }

  ngOnInit() {
    this.getTodos();
  }

  getTodos(){
    this.todos= this.todoService.getTodosFormData();
  }

  saveTodo(todo: Todo){
    //console.log("saveTodo:=todo.id:"+todo.id)
    if(todo.id){
      this.todoService.updateTodo(todo);
    }else{
      todo.id= this.todos.length + 1;
      console.log("saveTodo:=created --todo.id:"+todo.id)
      this.todoService.addTodo(todo);
    }
    this.saveMode = SaveMode.None;
  }

  removeToDo( todo: Todo){
    this.todoService.deleteTodo(todo);
  }

  cancelEditTodo(todo: Todo){
    this.formGroup.reset();
    this.saveMode= SaveMode.None;
  }

  showEditForm(todo: Todo){
    if( !todo){
      return;
    }
    this.saveMode = SaveMode.Edit;
    this.headerText='Edit TO-Do';
    const editedTodo = Object.assign({}, todo,{due: this.applyLocale(todo.due)});
    this.formGroup.setValue(editedTodo);
  }

   showNewForm(){
     this.formGroup.reset();
     this.saveMode =SaveMode.New;
     this.headerText = 'New To-Do';
   }

    showForm(){
      return this.saveMode !== SaveMode.None;
    }

    applyLocale(due){
      return new DatePipe(navigator.language).transform(due, 'y-MM-dd');
    }
}
