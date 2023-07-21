import React, { useState, useEffect } from "react";
import { getUser } from "../api/notesApi";

function Header(props) {
  const [user, setUser] = useState({});

  useEffect(() => {
    async function fetchUser() {
      const userInfo = await getUser();
      setUser(userInfo);
    }
    fetchUser();
  }, []);

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
        <a href="/user">
          <img src={user.profilePicture} id="pfpHeader" alt="userPFP" />
        </a>
      </div>
    </header>
  );
}

export default Header;
