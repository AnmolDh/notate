import React from "react";

function Header() {
  return (
    <header>
      <h1>Notate</h1>
      <form className="newNoteInput">
        <input placeholder="Take a note"></input>
        <button>+</button>
      </form>
      <div className="avatarDiv">
        <img src="./avatar.png" alt="avatar"></img>
      </div>
    </header>
  );
}

export default Header;