import { Component } from "../common/Component.js";
import { TodoItem } from "./TodoItem.js";

export class TodoList extends Component {
  render() {
    const todoListElement = document.createElement('div')
    todoListElement.className = "todo-list"
    
    return todoListElement;
  }
}