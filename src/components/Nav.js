import React, { useEffect, useState } from "react";

import { useContext } from "react";
import { UserContext } from "../context";

import { useNavigate, Link } from "react-router-dom";
const Nav = () => {
  const [state, setState] = useContext(UserContext);
  const navigate = useNavigate();
  const [current, setCurrent] = useState("");

//   useEffect(() => {
//     process.browser && setCurrent(window.location.pathname);
//   }, [process.browser && window.location.pathname]);

  const logout = () => {
    window.localStorage.removeItem("auth");
    setState(null);
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-between">
      <Link to="/" className={`nav-link ${current === "/" && "active"}`}>
        <a className="navbar-brand" href="#">
          MONEY
        </a>
      </Link>

      <div className="navbar-nav">
        {state !== null ? (
          <>
            <div className="nav-item dropdown">
              <button
                className="btn dropdown-toggle text-light"
                type="button"
                id="navbarDarkDropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {state && state.user && state.user.name}
              </button>
              <ul
                className="dropdown-menu col-1 position-absolute dropdown-menu-dark dropdown-menu-end"
                aria-labelledby="navbarDarkDropdownMenuLink"
              >
                <li>
                  <Link to="/money">
                    <a
                      className={`nav-link dropdown-item  ${
                        current === "/cribs" && "active"
                      }`}
                      href="#"
                    >
                      Dashboard
                    </a>
                  </Link>
                </li>
                <li>
                  <a onClick={logout} className="btn btn-danger w-100" href="#">
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <>
            <form className="d-flex">
              <Link to="/login">
                <a
                  className={`nav-link px-2 mx-2  ${
                    current === "/login" && "active px-2"
                  }`}
                  href="#"
                >
                  Login{" "}
                </a>
              </Link>

              <Link to="/register">
                <a
                  className={`nav-link  px-2 ${
                    current === "/register" && "active px-2"
                  }`}
                  href="#"
                >
                  Register
                </a>
              </Link>
            </form>
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
