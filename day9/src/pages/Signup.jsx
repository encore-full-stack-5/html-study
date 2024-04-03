import { register } from "../api/auth";
import Article from "../atom/Article";
import Button from "../atom/Button";
import Input from "../atom/Input";
import Label from "../atom/Label";

// Signup.jsx
// npm i axios
// fetch
const Signup = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const password = document.getElementById("password").value;
    const res = await register({ name, password });
    console.log(res);
  };

  return (
    <div className="container">
      <Article>
        <form onSubmit={onSubmit}>
          <Label htmlFor="name">name</Label>
          <Input id="name" required />
          <Label htmlFor="password">password</Label>
          <Input id="password" type="password" required />
          <hr className="m-4" />
          <Button>submit</Button>
        </form>
      </Article>
    </div>
  );
};

export default Signup;
