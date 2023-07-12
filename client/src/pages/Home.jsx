import React, { useState } from "react";
import Header from "../components/Header";
import Notes from "../components/Notes";

function Home() {
  const [open, setOpen] = useState(false);
  const [isNewNote, setIsNewNote] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setIsNewNote(true);
    setCreateNote({
      title: "",
      content: "",
    });
  };

  const [createNote, setCreateNote] = useState({
    title: "",
    content: "",
  });

  function handleInput(e) {
    const { name, value } = e.target;
    setCreateNote((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <>
      <Header handleOpen={handleOpen} />
      <Notes
        open={open}
        createNote={createNote}
        setCreateNote={setCreateNote}
        handleInput={handleInput}
        handleClose={handleClose}
        handleOpen={handleOpen}
        addNote={createNote}
        setAddNote={setCreateNote}
        isNewNote={isNewNote}
        setIsNewNote={setIsNewNote}
      />
    </>
  );
}

export default Home;
