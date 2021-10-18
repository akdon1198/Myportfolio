import "./Navbar.css";
import { Link, Route } from "react-router-dom";
import { useContext } from "react";
import { Contect } from "../Context/Context";

function Navbar() {
  const { value, handleClick } = useContext(Contect);
  console.log(value);

  return (
    <div className="mainNav">
      <div className="nav">
        <Link
          onClick={() => {
            handleClick("home");
          }}
          className={value === "home" ? "linkHover" : "link"}
          to="/"
        >
          <div className="logo">Home</div>
        </Link>
        <Link
          onClick={() => {
            handleClick("skills");
          }}
          className={value === "skills" ? "linkHover" : "link"}
          to="/skills"
        >
          <div className="logo">Skills</div>
        </Link>
        <Link
          onClick={() => {
            handleClick("projects");
          }}
          className={value === "projects" ? "linkHover" : "link"}
          to="/projects"
        >
          <div className="logo">Projects</div>
        </Link>
        <Link
          onClick={() => {
            handleClick("contact");
          }}
          className={value === "contact" ? "linkHover" : "link"}
          to="/contact"
        >
          <div className="logo">Contact</div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
