import { useNavigate, Link } from "react-router-dom";
import React, { useContext } from "react";
import { UserContext } from "../context";

export default function Home() {
  const [state, setState] = useContext(UserContext);
  const navigate = useNavigate();
  if (state && state.token) navigate("/money");
  return (
    <div>
      <div className="container-fluid text-sm-center p-5 mb-5 bg-dark text-light">
        {" "}
        {/* bg-light is background color & p-5 is padding */}
        <h1 className="display-1 text-white">
          <b>Money Manager</b>
        </h1>
        <p className="lead fs-3">Welcome to our app</p>
      </div>
      <br />
      <div className="d-flex justify-content-center py-5">
        <Link to="/login">
          <a className="btn btn-outline-success btn-lg mx-3">Login</a>
        </Link>
        <Link to="/register">
          <a className="btn btn-outline-primary btn-lg mx-3">Register</a>
        </Link>
      </div>
    </div>
  );
}
