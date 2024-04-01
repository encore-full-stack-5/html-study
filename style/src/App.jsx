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
//  git switch main
//  git switch -c emotion
//  npm i @emotion/css
//  npm i @emotion/react
//  git switch main
//  git switch -c tailwind
import { css } from "@emotion/css";
function App() {
  const [color, setColor] = useState("red");
  return (
    <>
      <div className="box"></div>
      <div className="box"></div>

      {/* css in js*/}
      <div
        className={css`
          width: 100px;
          height: 100px;
          background-color: ${color};
          &:hover {
            background-color: blue;
            transition: all 2s;
            transform: rotate(900deg) scale(2);
          }
        `}
      ></div>
      <input type="color" onChange={(e) => setColor(e.target.value)} />
    </>
  );
}

export default App;
