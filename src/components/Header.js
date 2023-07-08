import React from "react";
import CreateNote from "./CreateNote";

function Header(props) {
  return (
    <header>
      <h1>Notate</h1>
      <CreateNote />
      <div className="avatarDiv">
        <img src="./avatar.png" alt="avatar"></img>
      </div>
    </header>
  );
}

export default Header;
