"use client";
import {
  ChangeEvent,
  createContext,
  FormEvent,
  useEffect,
  useState,
} from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GlobalContextType, TodosType } from "../interfaces";

export const GlobalContext = createContext<GlobalContextType | null>(null);

export const colors = ["#f1c2c2", "#a9cba9", "#e5e58f", "#bcbcec"];

const Context = ({ children }: { children: React.ReactNode }) => {
  const [showButtons, setShowButtons] = useState(false);
  const [todoContainer, setTodoContainer] = useState<TodosType[]>([]);
  const [inputValue] = useState("");
  const [showText] = useState(false);

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
      inputValue: "",
      showtext: false,
    };
    setTodoContainer((prev) => [...prev, newTodo]);
  };

  const handleChange = (id: number, e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTodoContainer((prev) =>
      prev.map((el) => (el.id === id ? { ...el, inputValue: value } : el))
    );
  };

  const handleSubmit = (id: number, e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTodoContainer((prev) =>
      prev.map((el) => (el.id === id ? { ...el, text: el.inputValue } : el))
    );
    setTodoContainer((prev) =>
      prev.map((el) =>
        el.id === id ? { ...el, inputValue: "", showtext: true } : el
      )
    );
    toast.success("New todo added!", {
      position: "top-left",
      autoClose: 2000,
    });
  };

  const toggleCompleted = (id: number) => {
    setTodoContainer((prev) =>
      prev.map((el) =>
        el.id === id ? { ...el, completed: !el.completed } : el
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodoContainer((prev) => prev.filter((el) => el.id !== id));
    toast.error("Todo deleted!", {
      position: "top-left",
      autoClose: 2000,
    });
  };

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
        deleteTodo,
        inputValue,
        showText,
      }}
    >
      <div>{children}</div>
      <ToastContainer />
    </GlobalContext.Provider>
  );
};

export default Context;
