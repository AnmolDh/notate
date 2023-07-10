import React, { useState } from "react";
import Header from "../components/Header";
import Notes from "../components/Notes";
import { postNote, deleteNote, editNote } from "../api/notesApi";

function Home(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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

  function handlePost() {
    postNote(createNote).then(() => {});
    handleClose();
    setCreateNote({ title: "", content: "" });
  }

  function handleDelete(id) {
    deleteNote(id);
  }

  function handleEdit() {}

  return (
    <>
      <Header handleOpen={handleOpen} />
      <Notes
        open={open}
        createNote={createNote}
        handleInput={handleInput}
        handleClose={handleClose}
        handleOpen={handleOpen}
        handlePost={handlePost}
        handleDelete={handleDelete}
      />
    </>
  );
}

export default Home;
