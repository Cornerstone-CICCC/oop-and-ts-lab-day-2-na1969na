// コンポーネント間で共有するデータを管理するためのContextを作成
export class TodoContext {
  constructor() {
    this.todos = []; // todoリストを格納する配列
    this.listeners = []; // リスナーを格納する配列
  }

  // タスクリストを取得する
  getTodos() {
    return this.todos;
  }

  // タスクを追加する
  addTodo(description) {
    const newTodo = {
      id: Math.floor(Math.random() * (5000 - 1) + 1),
      description,
      completed: false,
    };
    this.todos.push(newTodo);
    console.log(this.todos);
    this.notifyListeners(); // 変更を通知
  }

  // タスクを削除する
  deleteTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    this.notifyListeners();
  }

  // タスクの完了状態を切り替える
  toggleTodoCompletion(id) {
    this.todos = this.todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    this.notifyListeners();
  }

  // リスナーを登録する
  addListener(listener) {
    this.listeners.push(listener);
  }

  // 登録されたリスナーに変更を通知する
  notifyListeners() {
    this.listeners.forEach((listener) => listener(this.todos));
  }
}

export const todoContext = new TodoContext();
