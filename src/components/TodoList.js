import { Component } from "../common/Component.js";
import { TodoItem } from "./TodoItem.js";
import { todoContext } from "../contexts/TodoContext.js";

export class TodoList extends Component {
  render() {
    const todoListElement = document.createElement('div');
    todoListElement.className = "todo-list";

    const listElement = document.createElement('ul');
    listElement.id = 'todo-list-ul';

    todoListElement.appendChild(listElement);

    // タスクリストのレンダリング関数
    const renderTodos = (todos) => {
      listElement.innerHTML = ''; // リストをクリア
      todos.forEach((todo) => {
        const todoItem = new TodoItem(todo); // 各タスクに対してTodoItemを作成
        listElement.appendChild(todoItem.render()); // TodoItemをリストに追加
      });
    };

    // 初期レンダリング
    renderTodos(todoContext.getTodos());

    // コンテキストの変更に応じて再レンダリング
    todoContext.addListener(renderTodos);

    return todoListElement;
  }
}
