import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";
import Searchbar from "./Searchbar";

function Modal() {
  const [modal, setModal] = useState("");

  const toggleModal = () => {
    setModal(!modal);

    if (modal) {
      document.body.classList.add("active-modal");
    } else {
      document.body.classList.remove("active-modal");
    }
  };

  return (
    <>
      <button
        onClick={toggleModal}
        className="open-modal"
        style={{
          background: "none",
          border: "none",
          position: "absolute",
          right: "5rem",
          top: "1rem",
        }}>
        <SearchIcon
          style={{
            color: "white",
            fontSize: "40px",
            cursor: "pointer",
          }}
        />
      </button>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <Searchbar />
            <div className="tag-guid">TYPE AT LEAST 3 CHARACTERS</div>
            <h3>Tags</h3>
            <div className="tags">
              <div className="tagsList">Britain</div>
              <div className="tagsList">Fashin</div>
              <div className="tagsList">Health</div>
              <div className="tagsList">memes</div>
              <div className="tagsList">Nature</div>
              <div className="tagsList">People</div>
              <div className="tagsList">Industries</div>
              <div className="tagsList">Bussiness</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
