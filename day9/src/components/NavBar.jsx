import { Link } from "react-router-dom";

//  components/MavBar.jsx
const MavBar = () => {
  return (
    <nav className="flex">
      <Link to="/">Home</Link>
      <Link to="/join">join</Link>
      <Link to="/login">login</Link>
    </nav>
  );
};

export default MavBar;
