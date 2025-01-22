import { Component } from "../common/Component.js";
import { todoContext } from "../contexts/TodoContext.js";

export class AddTodo extends Component {
  render() {
    const addElement = document.createElement('div')
    addElement.className = "add-todo"
    addElement.innerHTML = `
      <input type="text" id="todo-input" placeholder="Enter task details...">
      <button id="todo-add-btn">Add To Do</button>
    `
    
    const addButton = addElement.querySelector('#todo-add-btn');
    const input = addElement.querySelector('#todo-input');

    addButton.addEventListener('click', () => {
      const todo = input.value.trim();
      if (todo) {
        todoContext.addTodo(todo); // TodoContextを使ってタスクを追加
        input.value = ''; // 入力欄をクリア
      }
    });

    return addElement;
  }
}