import React from "react";
import { Button } from "@mui/material";
import Footer from "../components/Footer";
import Header from "../components/Header";

function User(props) {
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
      <Header />
      <div className="userInfo">
        <h1>User Info</h1>
        <div>
          <h3>
            Name: <span>{props.user.name}</span>
          </h3>
          <h3>
            Email: <span>{props.user.email}</span>
          </h3>
          <h3>
            Logged Via: <span>{props.user.authVia}</span>
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
      <Footer />
    </div>
  );
}

export default User;
