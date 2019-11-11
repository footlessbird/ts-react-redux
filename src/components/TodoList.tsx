import React from "react";
import { Todo } from "../modules/todo";
import TodoItem from "./TodoItem";
import useTodo from "../hooks/useTodo";

function TodoList() {
  // const todos: Todo[] = [];
  const todos = useTodo();
  if (todos.length === 0) return <p>Todo list is empty</p>;
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </ul>
  );
}

export default TodoList;
