import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "./api/notesApi";
import Home from "./pages/Home";
import Login from "./pages/Login";
import User from "./pages/User";

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    async function fetchUser() {
      const userInfo = await getUser();
      setUser(userInfo);
    }
    fetchUser();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Login user={user} />} />
      <Route path="/home" element={<Home user={user} />} />
      <Route path="/user" element={<User user={user} />} />
      <Route path="*" element={<Login user={user} />} />
    </Routes>
  );
}

export default App;
