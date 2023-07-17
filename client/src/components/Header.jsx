import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Header(props) {
  return (
    <header>
      <h1>Notate</h1>
      <div className="newNoteDiv" onClick={props.handleOpen}>
        <input placeholder="Take a note" disabled></input>
        <button>+</button>
      </div>
      <div className="headerTools">
        <button className="newNoteMobile" onClick={props.handleOpen}>
          +
        </button>
        <a href="user"><AccountCircleIcon color="primary" sx={{ fontSize: 48 }} /></a>
      </div>
    </header>
  );
}

export default Header;
