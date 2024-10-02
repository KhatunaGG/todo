// "use client";

// const PrimaryBtn = () => {
//   return (
//     <>
//       <div className="sticky bottom-[10vh] right-[50px] flex flex-col gap-4">
//         <div className="flex flex-col gap-2">
//           <button className="w-[60px] h-[60px] rounded-full bg-green-300">2</button>
//           <button className="w-[60px] h-[60px] rounded-full bg-yellow-200">1</button>
//           <button className="w-[60px] h-[60px] rounded-full bg-red-400">3</button>
//           <button className="w-[60px] h-[60px] rounded-full bg-blue-500">4</button>
//         </div>
//         <button className="w-[60px] h-[60px] rounded-full bg-[#333] "></button>
//       </div>
//     </>
//   );
// };

// export default PrimaryBtn;

"use client";

import { colors, GlobalContext } from "@/app/context/Context";
import { useContext } from "react";

const PrimaryBtn = () => {
  const context = useContext(GlobalContext);
  if (!context) return;
  const { setShowButtons, showButtons, handleCreate } = context;

  return (
    <div className="absolute flex flex-col gap-4 top-0 right-0 justify-start items-end pr-4">
      {showButtons && (
        <div className="flex flex-col gap-2">
          {colors.map((color, i) => (
            <button
              key={i}
              onClick={() => {
                handleCreate(color)
                setShowButtons(!showButtons)
              }}
              style={{ background: color }}
              className="w-[60px] h-[60px] rounded-full"
            ></button>
          ))}
        </div>
      )}

      <button
        onClick={() => setShowButtons(!showButtons)}
        className="w-[60px] h-[60px] rounded-full bg-[#333]"
      ></button>
    </div>
  );
};

export default PrimaryBtn;
