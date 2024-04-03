import { useState } from "react";
import { postBoard } from "../api/board";
import Article from "../atom/Article";
import Button from "../atom/Button";
import Input from "../atom/Input";

// pages/Boards.jsx
const Boards = () => {
  const [msg, setMsg] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;
    try {
      const res = await postBoard({ title, content });
      document.getElementById("content").value = "";
      document.getElementById("title").value = "";
      console.log(res);
    } catch (error) {
      setMsg(error.response.data);
    }
  };
  return (
    <Article>
      {/* add */}
      <p>{msg}</p>
      <form onSubmit={onSubmit}>
        <Input placeholder="title" id="title" />
        <Input placeholder="content" id="content" />
        <Button>add</Button>
      </form>
      {/* list view */}
    </Article>
  );
};
export default Boards;
