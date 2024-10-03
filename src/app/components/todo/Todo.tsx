"use client";
import { GlobalContext } from "@/app/context/Context";
import { useContext } from "react";
import Download from "../Download/Download";
import Delete from "../Delete/Delete";
import { downloadTodos } from "../../helpers";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TodoPropType } from "@/app/interfaces";
import { Reorder, useMotionValue } from "framer-motion";

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
  showText,
  el,
}: TodoPropType) => {
  const context = useContext(GlobalContext);
  if (!context) return;
  const { todoContainer } = context;
  const y = useMotionValue(0);

  const handleDownload = (format: "txt" | "pdf") => {
    downloadTodos(todoContainer, format);
    toast.info("Todos downloaded successfully!", {
      position: "top-left",
      autoClose: 2000,
    });
  };

  return (
    <Reorder.Item
      value={el}
      style={{ background: color, y }}
      className="w-full  p-4 rounded-lg flex flex-col gap-2 shadow-lg"
    >
      <div className="w-full flex justify-end gap-6 mb-4">
        <button onClick={() => deleteTodo(id)}>
          <Delete />
        </button>
        <button onClick={() => handleDownload("pdf")}>
          <Download />
        </button>
      </div>

      <form
        className={showText ? "mb-0" : "mb-6"}
        onSubmit={(e) => handleSubmit(id, e)}
      >
        <input
          onChange={(e) => handleChange(id, e)}
          type="text"
          className="w-[80%] p-2 rounded-l-md outline-none"
          value={inputValue}
        />
        <button
          type="submit"
          className="w-[20%] bg-green-400 p-2 rounded-r-md font-bold"
        >
          Add
        </button>
      </form>

      {showText && (
        <div className="flex gap-2 items-center">
          <div className="mt-2">
            <input
              onChange={() => toggleCompleted(id)}
              type="checkbox"
              name=""
              id=""
              checked={completed === true}
            />
          </div>
          <p
            style={{ marginTop: "4px" }}
            className={completed ? "line-through" : "none"}
          >
            {text}
          </p>
        </div>
      )}
    </Reorder.Item>
  );
};

export default Todo;
