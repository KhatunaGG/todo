import { PrimaryBtn, Todos } from "./components";

export default function Home() {
  return (
    <div className=" h-full w-full relative">
      <div className="container  h-screen w-[59%] mx-auto pt-[3vh] flex justify-center">
        <div className="w-[40%]  flex flex-col gap-6">
          <Todos />
        </div>
      </div>
      <PrimaryBtn />
    </div>
  );
}
