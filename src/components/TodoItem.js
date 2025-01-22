import { Component } from "../common/Component.js";
import { todoContext } from "../contexts/TodoContext.js";

export class TodoItem extends Component {
  constructor(todo) {
    super();
    this.todo = todo; // Todoデータをプロパティとして保存
  }

  render() {
    const { id, description, completed } = this.todo;

    const todoElement = document.createElement('li')
    todoElement.className = `todo-item ${completed ? 'completed' : ''}`;
    todoElement.innerHTML = `
      <span>${description}</span>
      <button class="complete-btn">${completed ? 'Undo' : 'Complete'}</button>
      <button class="delete-btn">Delete</button>
    `;

    // 完了ボタンのイベントハンドラ
    todoElement.querySelector('.complete-btn').addEventListener('click', () => {
      todoContext.toggleTodoCompletion(id); // コンテキストの完了状態を更新
    });

    // 削除ボタンのイベントハンドラ
    todoElement.querySelector('.delete-btn').addEventListener('click', () => {
      todoContext.deleteTodo(id); // コンテキストからタスクを削除
    });

    return todoElement;
  }
}