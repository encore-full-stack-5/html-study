import { useState } from "react";
import "./App.css";
import Box from "./components/Box";
import Person from "./components/Person";
// import java.util.List;
// html 태그를 리턴하는 파일을 jsx
//                        csr client side render ssr server side render
// 초기 속도(사이트 접속했을때)   느림              빠름
// 그후부터의 속도                빠름              느림

function App() {
  //  [변수, set함수] = useState(초기값);
  const [width, setWidth] = useState(500);
  const [height, setHeight] = useState(500);

  return (
    <div className="App">
      <Person />
      <input type="range" onChange={(e) => setWidth(e.target.value + "px")} />
      <input type="range" onChange={(e) => setHeight(e.target.value + "px")} />
      <Box width={width} height={height} />
      <Box width={width} height={height} />
      <Box height={height} width={width}></Box>
    </div>
  );
}

export default App;
