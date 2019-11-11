import React, { ChangeEvent, FormEvent, useState } from "react";
import useAddTodo from "../hooks/useAddTodo";

function NewTodo() {
  const [value, setValue] = useState("");
  const addTodo = useAddTodo();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input placeholder="Please type todo" value={value} onChange={onChange} />
      <button type="submit">New</button>
    </form>
  );
}

export default NewTodo;
