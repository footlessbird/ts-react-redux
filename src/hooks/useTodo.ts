import { useSelector } from "react-redux";
import { RootState } from "../modules";

export default function useTodo() {
  const todo = useSelector((state: RootState) => state.todo);
  return todo;
}
