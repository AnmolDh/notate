import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Header(props) {
  function hrefToUser() {
    window.location.href = "/user";
  }

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
        <AccountCircleIcon color="primary" onClick={hrefToUser} sx={{ fontSize: 45, cursor: "pointer" }} />
      </div>
    </header>
  );
}

export default Header;
