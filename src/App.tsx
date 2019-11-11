import React from "react";
import "./App.css";

import Counter from "./components/Counter";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  // return <Counter />;
  return (
    <>
      <NewTodo />
      <TodoList />
    </>
  );
};

export default App;
