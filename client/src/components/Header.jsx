import React from "react";

function Header(props) {
  return (
    <header>
      <h1>Notate</h1>
      <div className="newNoteDiv" onClick={props.handleOpen}>
        <input placeholder="Take a note" disabled></input>
        <button>+</button>
      </div>
      <div className="avatarDiv">
        <img src="./avatar.png" alt="avatar"></img>
      </div>
    </header>
  );
}

export default Header;
