"use client";
import { GlobalContext } from "@/app/context/Context";
import { useContext } from "react";
import Todo from "../todo/Todo";

const Todos = () => {
  const context = useContext(GlobalContext);
  if (!context) return;

  const { todoContainer, } = context;

  return (
    <>
      {todoContainer.map((el) => (
        <Todo key={el.id} color={el.color} id={el.id} />
      ))}
    </>
  );
};

export default Todos;
