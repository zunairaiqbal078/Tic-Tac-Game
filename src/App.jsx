import { useState } from "react";

import "./App.css";

import Board from "./Components/Board";

function App() {
  return (
    <>
      <div className="flex flex-wrap items-center justify-center w-full">
        <Board />
      </div>
    </>
  );
}

export default App;
