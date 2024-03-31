// Counter.jsx js

import { useState } from "react";

// function return을 html 태그들 하는것
const Counter = () => {
  const [i, setI] = useState(0);
  const [number, setNumber] = useState(0);
  const onClickDiv = () => {
    if (number !== 0) setI(i / number);
    else alert("0이 아닌거 넣어주세요");
  };
  return (
    <div>
      <h1>{i}</h1>
      <input
        type="number"
        onChange={(e) => setNumber(Number(e.target.value))}
        value={number}
      />
      <button onClick={() => setI(i + number)}>+</button>
      <button onClick={() => setI(i - number)}>-</button>
      <button onClick={() => setI(i * number)}>*</button>
      {number !== 0 && <button onClick={onClickDiv}>/</button>}
    </div>
  );
};
export default Counter;

//  월요일날 대충 프로젝트 기능정리
