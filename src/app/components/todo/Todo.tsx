"use client";
import { GlobalContext } from "@/app/context/Context";
import { ChangeEvent, FormEvent, useContext } from "react";
import Download from "../Download/Download";
import Delete from "../Delete/Delete";
import { downloadTodos } from "../../helpers";

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
};

const Todo = ({
  color,
  id,
  text,
  handleChange,
  handleSubmit,
  completed,
  toggleCompleted,
  deleteTodo,
  inputValue,
}: TodoPropType) => {
  const context = useContext(GlobalContext);
  if (!context) return;
  const { todoContainer } = context;

  const handleDownload = (format: "txt" | "pdf") => {
    downloadTodos(todoContainer, format);
  };

  return (
    <div
      style={{ background: color }}
      className="w-full bg-blue-400 p-4 rounded-lg flex flex-col gap-2"
    >
      <div className="w-full flex justify-end gap-6 mb-4">
        <button onClick={() => deleteTodo(id)}>
          <Delete />
        </button>
        <button onClick={() => handleDownload("pdf")}>
          <Download />
        </button>
      </div>

      <form onSubmit={(e) => handleSubmit(id, e)}>
        <input
          onChange={(e) => handleChange(id, e)}
          type="text"
          className="w-[80%] p-2"
          value={inputValue}
        />
        <button type="submit" className="w-[20%] bg-green-400 p-2">
          add
        </button>
      </form>

      <div className="mt-2">
        <input
          onChange={() => toggleCompleted(id)}
          type="checkbox"
          name=""
          id=""
          checked={completed === true}
        />
      </div>

      <p>{text}</p>
    </div>
  );
};

export default Todo;
