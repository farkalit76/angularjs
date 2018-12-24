import { Injectable } from '@angular/core';

import { Todo } from './todo';
import { TODO_ITEMS } from '../../app/todo-data';

@Injectable()
export class TodoService {

  pItems:Todo[] = TODO_ITEMS;

  constructor() { }

  getTodosFormData():Todo[] {
    return this.pItems;
  }

  addTodo(todo: Todo){
    this.pItems.push(todo);
  }

  updateTodo(todo: Todo){
    //console.log("updateTodo:=todo.id:"+todo.id)
    const index = this.pItems.map( x => x.id).indexOf(todo.id);
    this.pItems[index] = todo;
  }

  deleteTodo(todo: Todo){
    this.pItems.splice(this.pItems.indexOf(todo), 1);
  }
}
