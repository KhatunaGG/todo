import Image from "next/image";
import { PrimaryBtn, Todos } from "./components";

export default function Home() {
  return (
    <div className="bg-yellow-100 h-full w-full relative">
      <div className="container bg-green-100 h-screen w-[59%] mx-auto pt-[3vh] flex justify-center">
        <div className="w-[40%] bg-red-300 flex flex-col gap-6">
          <Todos />
        </div>
      </div>
      <PrimaryBtn />
    </div>
  );
}
