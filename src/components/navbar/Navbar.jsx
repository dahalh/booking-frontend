import "./navbar.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { dispatch, user } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();

    dispatch({ type: "LOGOUT" });
    navigate("/");
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <span className="logo">Bestbooking</span>
        </Link>
        {user ? (
          <>
            <div className="navItems">
              <h4 style={{ marginBottom: "10px" }}>Welcome {user.username}</h4>
              <button onClick={handleClick} className="navButton">
                Logout
              </button>
            </div>
          </>
        ) : (
          <div className="navItems">
            <button className="navButton">Register</button>
            <button className="navButton">Login</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
