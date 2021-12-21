import React from "react";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate,Link } from 'react-router-dom';
import { SyncOutlined } from "@ant-design/icons";
import { UserContext } from "../../context";
const UserRoute = ({ children }) => {
  const [ok, setOk] = useState(false);
  let navigate = useNavigate();
  const [state] = useContext(UserContext);
  useEffect(() => {
    if (state && state.token) getCurrentUser();
  }, [state && state.token]);

  const getCurrentUser = async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_API}/current-user`);
      if (data.ok) setOk(true);
    } catch (error) {
      navigate.push("/login");
    }
  };
 
    state === null &&
    setTimeout(() => {
      getCurrentUser();
    }, 1000);

  return !ok ? (
    <SyncOutlined
      spin
      className="d-flex justify-content-center display-1 text-primary p-5"
    />
  ) : (
    <>{children}</>
  );
};

export default UserRoute;
