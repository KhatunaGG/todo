"use client";
import {
  ChangeEvent,
  createContext,
  Dispatch,
  FormEvent,
  SetStateAction,
  useEffect,
  useState,
} from "react";

export type GlobalContextType = {
  setShowButtons: Dispatch<SetStateAction<boolean>>;
  showButtons: boolean;
  handleCreate: (color: string) => void;
  todoContainer: TodosType[];
  setTodoContainer: Dispatch<SetStateAction<TodosType[]>>;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (id: number, e: FormEvent<HTMLFormElement>) => void;
  toggleCompleted: (id: number) => void;
  deleteTodo: (id: number) => void;
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
  const [inputValue, setInputValue] = useState("");

  console.log(todoContainer, "todoContainer");
  console.log(inputValue, "inputValue");

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodoContainer(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    if (todoContainer.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todoContainer));
    }
  }, [todoContainer]);

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

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (id: number, e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTodoContainer((prev) =>
      prev.map((el) => (el.id === id ? { ...el, text: inputValue } : el))
    );
    setInputValue(""); 
  };

  const toggleCompleted = (id: number) => {
    setTodoContainer((prev) => prev.map((el) => el.id === id ? {...el, completed: !el.completed} : el))

  }

  const deleteTodo = (id: number) => {
    setTodoContainer((prev) => prev.filter((el) => el.id !== id) )

  }

  return (
    <GlobalContext.Provider
      value={{
        setShowButtons,
        showButtons,
        handleCreate,
        todoContainer,
        setTodoContainer,
        handleChange,
        handleSubmit,
        toggleCompleted,
        deleteTodo
      }}
    >
      <div>{children}</div>
    </GlobalContext.Provider>
  );
};

export default Context;
