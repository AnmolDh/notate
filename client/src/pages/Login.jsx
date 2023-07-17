import React, { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import { Button } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";

function Login() {
  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/user`, {
      credentials: "include",
    })
      .then((response) => response.json())
      .then((user) => (user.isLoggedIn ? window.location.replace("/home") : null));
  }, []);
  return (
    <div>
      <header>
        <h1>Notate</h1>
      </header>
      <section className="hero">
        <div className="heroLeft">
          <h1 className="heroText">
            Welcome to Notate, your brain's personal assistant for capturing and
            organizing thoughts! We promise not to eat them... or do we?
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
              color="success"
              href={`${process.env.REACT_APP_SERVER_URL}/auth/google`}
            >
              Google
            </Button>
            <Button
              className="facebook"
              variant="contained"
              startIcon={<FacebookIcon />}
              color="primary"
              href={`${process.env.REACT_APP_SERVER_URL}/auth/facebook`}
            >
              Facebook
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
