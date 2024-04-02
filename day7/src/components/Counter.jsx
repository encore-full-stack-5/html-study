// Counter.jsx js

import { useState } from "react";

// function return을 html 태그들 하는것
const Counter = () => {
  const [i, setI] = useState(0);
  const [number, setNumber] = useState(0);
  const [logs, setLogs] = useState([]);
  const onClickDiv = () => {
    if (number !== 0) {
      setI(i / number);
      setLogs([...logs, `${i} / ${number} = ${i / number}`]);
    } else alert("0이 아닌거 넣어주세요");
  };
  const onClickAdd = () => {
    setI(i + number);
    setLogs((prev) => [...logs, `${i} + ${number} = ${i + number}`]);
  };
  const onClickDiff = () => {
    setI(i - number);
    setLogs([...logs, `${i} - ${number} = ${i - number}`]);
  };
  const onClickMul = () => {
    setI(i * number);
    setLogs([...logs, `${i} * ${number} = ${i * number}`]);
  };
  return (
    <div>
      <h1>{i}</h1>
      <input
        type="number"
        onChange={(e) => setNumber(Number(e.target.value))}
        value={number}
      />
      <button onClick={onClickAdd}>+</button>
      <button onClick={onClickDiff}>-</button>
      <button onClick={onClickMul}>*</button>
      {number !== 0 && <button onClick={onClickDiv}>/</button>}
      {logs.map((str, i) => (
        <p key={i}>{str}</p>
      ))}
    </div>
  );
};
export default Counter;

//  월요일날 대충 프로젝트 기능정리
// create react app

// npm create vite@latest
// day9
//  npm i (install)

//  npm run dev
