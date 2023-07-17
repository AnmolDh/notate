import React, { useState, useEffect } from "react";
import { getUser } from "../api/notesApi";

function User() {
  const [user, SetUser] = useState({});

  useEffect(() => {
    getUser().then((user) => SetUser(user));
  }, []);

  return (
    <>
      <header>
        <h1>Notate</h1>
        <a href="/home">
          <button className="backToHome">Back to Home</button>
        </a>
      </header>
      <div className="userInfo">
        <h1>User Info</h1>
        <div>
          <h3>
            Name: <span>{user.name}</span>
          </h3>
          <h3>
            Email: <span>{user.email}</span>
          </h3>
          <h3>
            Logged Via: <span>{user.authVia}</span>
          </h3>
        </div>
      </div>
    </>
  );
}

export default User;
