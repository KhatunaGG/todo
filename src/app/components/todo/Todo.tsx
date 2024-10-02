"use client";
import { GlobalContext } from "@/app/context/Context";
import { useContext } from "react";

export type TodoPropType = {
  id: number;
  color: string;
};

const Todo = ({ color, id }: TodoPropType) => {
  const context = useContext(GlobalContext);
  if (!context) return;


  return (
    <div
      style={{ background: color }}
      className="w-full bg-blue-400 p-4 rounded-lg flex flex-col gap-2"
    >
      <div className="w-full flex justify-end gap-6 mb-4">
        <button>X</button>
        <button>?</button>
      </div>

      <form
      
      action="">
        <input

        type="text" className="w-[80%] p-2" />
        <button className="w-[20%] bg-green-400 p-2">add</button>
      </form>

      <div className="mt-2">
        <input type="checkbox" name="" id="" />
      </div>

      <p></p>
    </div>
  );
};

export default Todo;
