import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../styles/worlds.css";

function Worlds() {
  return (
    <>
      <div className="worlds">
        <ul>
          <li>{/* <Link to="/">World</Link> */}</li>
          <li>
            <Link to="/britain">Britain</Link>
          </li>
          <li>
            <Link to="/india">India</Link>
          </li>
          <li>
            <Link to="/france">France</Link>
          </li>
          <li>
            <Link to="/rusia">Rusia</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
}

export default Worlds;
