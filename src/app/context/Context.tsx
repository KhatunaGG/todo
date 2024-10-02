"use client";
import { createContext, Dispatch, SetStateAction, useState } from "react";

export type GlobalContextType = {
  setShowButtons: Dispatch<SetStateAction<boolean>>;
  showButtons: boolean;
  handleCreate: (color: string) => void;
  todoContainer: TodosType[];
  setTodoContainer: Dispatch<SetStateAction<TodosType[]>>;
};

export type TodosType = {
  color: string;
  id: number;
  completed: boolean;
  text: string;
};

export const GlobalContext = createContext<GlobalContextType | null>(null);

export const colors = ["red", "green", "yellow", "blue"];

const Context = ({ children }: { children: React.ReactNode }) => {
  const [showButtons, setShowButtons] = useState(false);
  const [todoContainer, setTodoContainer] = useState<TodosType[]>([]);

  console.log(todoContainer, "todoContainer");

  const handleCreate = (color: string) => {
    const lastId = todoContainer[todoContainer.length - 1]?.id || 0;
    const newTodo = {
      color: color,
      id: lastId + 1,
      text: "",
      completed: false,
    };
    setTodoContainer((prev) => [...prev, newTodo]);
  };

  return (
    <GlobalContext.Provider
      value={{
        setShowButtons,
        showButtons,
        handleCreate,
        todoContainer,
        setTodoContainer,
      }}
    >
      <div>{children}</div>
    </GlobalContext.Provider>
  );
};

export default Context;
