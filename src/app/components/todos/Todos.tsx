"use client";
import { GlobalContext } from "@/app/context/Context";
import { useContext } from "react";
import Todo from "../todo/Todo";

const Todos = () => {
  const context = useContext(GlobalContext);
  if (!context) return;

  const {
    todoContainer,
    handleChange,
    handleSubmit,
    toggleCompleted,
    deleteTodo,
  } = context;

  return (
    <>
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
        />
      ))}
    </>
  );
};

export default Todos;
