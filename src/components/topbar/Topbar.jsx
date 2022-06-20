import "./topbar.css";
import profileImg from "../../images/imag.png";
import { Link } from "react-router-dom";

export default function Topbar() {
  const user = false;
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-twitter-square"></i>
        <i className="topIcon fa-brands fa-pinterest-square"></i>
        <i className="topIcon fa-brands fa-instagram-square"></i>
        <i className="topIcon fa-brands fa-facebook-square"> </i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              {" "}
              Home
            </Link>
          </li>
          <li className="topListItem">
            {/* <Link style={{textDecoration:"none", color:"inherit"}} to="/"> About</Link> this is one way to remove the default color and underline given by html when the link tag is used but here in index.html wed defined a style with link classname where we wrote the code for removal of underline ie. textdecoration and color to remain as parent so wrote inherit and used that className here. */}
            <Link className="link" to="/">
              {" "}
              About
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/contact" className="link">
              Contact
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/write" className="link">
              Create
            </Link>
          </li>
          <li className="topListItem">{user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <img className="topImage" src={profileImg} alt="profile" />
        ) : (
          <ul className="topList">
            <li className="topListItem">
                <Link to="/login" className="link">
                  Login
                </Link>
            </li>
            
            <li className="topListItem">
                <Link to="/register" className="link">
                  Register
                </Link>
            </li>
          </ul>
        )}

        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
