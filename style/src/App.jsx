import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// git branch
// git add .
//  git commit -m "init"
//  git switch master
//  git switch main
//  git switch -c bootstrap
//  git switch -c main
//  git switch -c tailwind
function App() {
  const [col, setCol] = useState("#be2020");
  console.log(col);
  return (
    <>
      <div className="box"></div>
      <div className="box"></div>
      <input type="color" onChange={(e) => setCol(e.target.value)} />
      <div className={`h-11 w-11 bg-[${col}] shadow rounded`}></div>
    </>
  );
}

export default App;
