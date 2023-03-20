import React from "react";
import Sidebar from "../Sidebar";
import { Link } from "react-router-dom";
import "./Error404.css";

const Error404 = () => {
  return (
    <>
      <h1 className="gradient-text text-h1 center">Error 404</h1>
      <h2>
        <Link className=" text-h2 " to="/home">Click here to Go back home</Link>
      </h2>
    </>
  );
};

export default Error404;
