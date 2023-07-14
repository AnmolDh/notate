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
        <button type="button" class="login-with-google-btn">
          Sign in with Google
        </button>
      </div>
    </div>
  );
}

export default Login;