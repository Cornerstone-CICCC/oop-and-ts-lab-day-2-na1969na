import { Component } from "../common/Component.js";

export class TodoItem extends Component {
  render() {
    const todoElement = document.createElement('li')
    todoElement.className = "todo-item"

    return todoElement;
  }
}