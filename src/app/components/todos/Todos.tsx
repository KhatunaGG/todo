"use client";
import { GlobalContext } from "@/app/context/Context";
import { useContext } from "react";
import Todo from "../todo/Todo";
import { Reorder } from "framer-motion";

const Todos = () => {
  const context = useContext(GlobalContext);
  if (!context) return;

  const {
    todoContainer,
    handleChange,
    handleSubmit,
    toggleCompleted,
    deleteTodo,
    setTodoContainer,
  } = context;

  return (
    <Reorder.Group
      axis="y"
      values={todoContainer}
      onReorder={setTodoContainer}
      className="flex flex-col gap-6"
    >
      {todoContainer.map((el) => (
        <Todo
          key={el.id}
          color={el.color}
          id={el.id}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          text={el.text}
          completed={el.completed}
          toggleCompleted={toggleCompleted}
          deleteTodo={deleteTodo}
          inputValue={el.inputValue}
          showText={el.showtext}
          el={el}
        />
      ))}
    </Reorder.Group>
  );
};

export default Todos;
