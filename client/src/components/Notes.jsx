import React, { useEffect, useState } from "react";
import Note from "./Note";
import { getNotes, postNote, deleteNote, editNote } from "../api/notesApi";
import CreateNote from "./CreateNote";

function Notes(props) {
  const [notes, setNotes] = useState([]);

  function randomBgColor() {
    const bgColor = ["#F7D44C", "#EB7A53", "#98B7DB", "#A8D672", "#F6ECC9"];
    return bgColor[Math.floor(Math.random() * bgColor.length)];
  }

  useEffect(() => {
    getNotes().then((data) => {
      const notes = data.map((note) => ({
        ...note,
        bgColor: randomBgColor(),
      }));
      setNotes(notes);
    });
  }, []);

  function handlePost() {
    postNote(props.addNote).then(() => {
      getNotes().then((data) => {
        const notes = data.map((note) => ({
          ...note,
          bgColor: randomBgColor(),
        }));
        setNotes(notes);
      });
    });
    props.handleClose();
    props.setAddNote({ title: "", content: "" });
  }

  function handleDelete(id) {
    deleteNote(id).then(() => {
      setNotes((prevNotes) => prevNotes.filter((note) => note._id !== id));
    });
  }

  function handleEdit() {}

  return (
    <div className="notes">
      {notes.map((note) => (
        <Note
          key={note._id}
          id={note._id}
          title={note.title}
          content={note.content}
          bgColor={note.bgColor}
          handleDelete={() => handleDelete(note._id)}
          handleEdit={handleEdit}
        />
      ))}
      <CreateNote
        open={props.open}
        handleInput={props.handleInput}
        handlePost={handlePost}
        createNote={props.addNote}
        handleClose={props.handleClose}
      />
    </div>
  );
}

export default Notes;
