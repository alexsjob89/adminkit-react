import React from "react";
import Modal from "../components/navComponents/Modal";
import "../styles/navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">busanB</div>
      <ul className="navlist">
        <li>HOME</li>
        <li>ABOUT</li>
        <li>HEALTH</li>
        <li>BOXING</li>
      </ul>
      <Modal />
    </div>
  );
}

export default Navbar;
