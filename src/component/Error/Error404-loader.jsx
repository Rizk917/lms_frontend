import Sidebar from "../Sidebar";
import "./Error404.css"
import React from "react";
import Error404 from "./Error404";
import Header from "../Header";

function Error404loader() {
  return (
    <div>
      <div className="flexing">
        <Sidebar />
        <div className="ordering">
            <Header/>
          <Error404 />
        </div>
      </div>
    </div>
  );
}

export default Error404loader;