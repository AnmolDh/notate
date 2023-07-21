import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { getUser } from "../api/notesApi";
import Footer from "../components/Footer";

function User() {
  const [user, setUser] = useState({});

  useEffect(() => {
    async function fetchUser() {
      const userInfo = await getUser();
      setUser(userInfo);
    }
    fetchUser();
  }, []);

  function logout() {
    return fetch(`${process.env.REACT_APP_SERVER_URL}/logout`, {
      method: "POST",
      credentials: "include",
    })
      .then((response) => response.json())
      .then((logout) => (logout ? window.location.replace("/") : null));
  }

  return (
    <div className="user">
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
        <Button
          className="logout"
          variant="contained"
          color="warning"
          onClick={logout}
        >
          Logout
        </Button>
      </div>
      <Footer/>
    </div>
  );
}

export default User;
