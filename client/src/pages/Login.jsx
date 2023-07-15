import React from "react";

const style = {
  color: "white"
}

function Login() {
  return (
    <div style={style}>
      <header>
        <h1>Notate</h1>
      </header>
      <div>
        <a href="http://localhost:4000/auth/google">
          <button type="button" className="login-with-google-btn">
            Sign in with Google
          </button>
        </a>
      </div>
    </div>
  );
}

export default Login;