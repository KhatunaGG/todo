"use client";
import { colors, GlobalContext } from "@/app/context/Context";
import { useContext } from "react";

const PrimaryBtn = () => {
  const context = useContext(GlobalContext);
  if (!context) return;
  const { setShowButtons, showButtons, handleCreate } = context;

  return (
    <div className="absolute flex flex-col gap-4 top-0 right-0 justify-start items-end pr-4">
      <button
        onClick={() => setShowButtons(!showButtons)}
        className="w-[60px] h-[60px] rounded-full bg-[#333]"
      ></button>
      {showButtons && (
        <div className="flex flex-col gap-2">
          {colors.map((color, i) => (
            <button
              key={i}
              onClick={() => {
                handleCreate(color);
                setShowButtons(!showButtons);
              }}
              style={{ background: color }}
              className="w-[60px] h-[60px] rounded-full"
            ></button>
          ))}
        </div>
      )}
    </div>
  );
};

export default PrimaryBtn;
