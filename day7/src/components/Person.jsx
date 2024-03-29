import { useState } from "react";

const Person = () => {
  const [name, setName] = useState("송희");
  let age = 12;
  return (
    <>
      <input onChange={(e) => setName(e.target.value)}></input>

      <input type="number" onChange={(e) => (age = e.target.value)} />
      <p>이름 : {name}</p>
      <p>나이 : {age}</p>
    </>
  );
};
export default Person;
