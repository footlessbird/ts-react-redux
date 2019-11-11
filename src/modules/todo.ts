// as const를 사용하지 않으면 ReturnType을 사용했을 때
// type의 타입이 무조건 string으로 처리되어 리듀서를 제대로 구현할 수 없다
// action types
const ADD_TODO = "todo/ADD_TODO" as const;
const TOGGLE_TODO = "todo/TOGGLE_TODO" as const;
const REMOVE_TODO = "todo/REMOVE_TODO" as const;

// action functions
export const addTodo = (text: string) => ({
  type: ADD_TODO,
  payload: text
});

export const toggleTodo = (id: number) => ({
  type: TOGGLE_TODO,
  payload: id
});

export const removeTodo = (id: number) => ({
  type: REMOVE_TODO,
  payload: id
});

// TS type for actions
type TodoAction =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof toggleTodo>
  | ReturnType<typeof removeTodo>;

// 상태를 위한 타입 선언
// 컴포넌트에서 불러와 사용할 것이므로 export
export type Todo = {
  id: number;
  text: string;
  done: boolean;
};

type TodoState = Todo[];

// 초기값 설정
const initialState: TodoState = [
  { id: 1, text: "Learn TypeScript", done: true },
  { id: 2, text: "TypeScript with Redux", done: true },
  { id: 3, text: "Make Todo List", done: false }
];

function todo(state: TodoState = initialState, action: TodoAction): TodoState {
  switch (action.type) {
    case ADD_TODO:
      const nextId = Math.max(...state.map(todo => todo.id)) + 1;
      return state.concat({
        id: nextId,
        text: action.payload,
        done: false
      });

    case TOGGLE_TODO:
      return state.map(todo =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );

    case REMOVE_TODO:
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
}

export default todo;
