import React, { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import { Button } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";

function Login() {
  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/isAuth`, {
      credentials: "include",
    })
      .then((response) => response.json())
      .then((isAuth) => (isAuth ? window.location.replace("/home") : null));
  }, []);
  return (
    <div>
      <header>
        <h1>Notate</h1>
      </header>
      <section className="hero">
        <div className="heroLeft">
          <h1 className="heroText">
            Welcome to Notate, the ultimate note-taking solution to help you
            capture and organize your thoughts with ease.
          </h1>
          <div className="typeAnimate">
            <TypeAnimation
              sequence={[
                "Create and manage notes effortlessly with a user-friendly interface.",
                500,
                "Organize your notes using categories and tags for easy access.",
                500,
                "Secure your notes with user authentication.",
                500,
              ]}
              speed={60}
              repeat={Infinity}
            />
          </div>
        </div>
        <div className="heroRight">
          <div className="signIn">
            <h4>Sign in with</h4>
            <Button
              className="google"
              variant="contained"
              startIcon={<GoogleIcon />}
              href={`${process.env.REACT_APP_SERVER_URL}/auth/google`}
            >
              Google
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
