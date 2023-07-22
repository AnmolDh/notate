import React from "react";

function Header(props) {
  let headerContent;
  if (window.location.pathname === "/home") {
    headerContent = (
      <>
        <h1>Notate</h1>
        <div className="newNoteDiv" onClick={props.handleOpen}>
          <input placeholder="Take a note" disabled></input>
          <button>+</button>
        </div>
        <div className="headerTools">
          <button className="newNoteMobile" onClick={props.handleOpen}>
            +
          </button>
          <a href="/user">
            <img src={props.user.profilePicture} id="pfpHeader" alt="userPFP" />
          </a>
        </div>
      </>
    );
  } else if (window.location.pathname === "/user") {
    headerContent = (
      <>
        <h1>Notate</h1>
        <a href="/home">
          <button className="backToHome">Back to Home</button>
        </a>
      </>
    );
  }

  return <header>{headerContent}</header>;
}

export default Header;
