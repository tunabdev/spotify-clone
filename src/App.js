import React from "react";
import { Counter } from "./features/counter/Counter";
import { NavLayout } from "./layout/NavLayout";
import { TopBar } from "./layout/TopBar";
import { Content } from "./components/Content";
import { NowPlaying } from "./components/NowPlaying";
function App() {
  return (
    <div className="w-full h-full grid grid-cols-[auto_1fr] grid-rows-[auto-1fr-auto] min-h-full text-sm ">
      <NavLayout />
      <main className="w-full h-full bg-top-black ">
        <TopBar />
        <Content />
      </main>
      <NowPlaying />
    </div>
  );
}

export default App;
