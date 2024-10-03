import { ChangeEvent, Dispatch, FormEvent, SetStateAction } from "react";

export type GlobalContextType = {
  setShowButtons: Dispatch<SetStateAction<boolean>>;
  showButtons: boolean;
  handleCreate: (color: string) => void;
  todoContainer: TodosType[];
  setTodoContainer: Dispatch<SetStateAction<TodosType[]>>;
  handleChange: (id: number, e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (id: number, e: FormEvent<HTMLFormElement>) => void;
  toggleCompleted: (id: number) => void;
  deleteTodo: (id: number) => void;
  inputValue: string;
  showText: boolean;
};

export type TodosType = {
  color: string;
  id: number;
  completed: boolean;
  text: string;
  inputValue: string;
  showtext: boolean;
};

export type TodoPropType = {
  id: number;
  color: string;
  handleChange: (id: number, e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (id: number, e: FormEvent<HTMLFormElement>) => void;
  text: string;
  completed: boolean;
  toggleCompleted: (id: number) => void;
  deleteTodo: (id: number) => void;
  inputValue: string;
  showText: boolean;
  el: TodosType;
};
