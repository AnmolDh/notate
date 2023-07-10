import React, { useEffect, useState } from "react";
import Note from "./Note";
import { getNotes } from "../api/notesApi";
import CreateNote from "./CreateNote";

function Notes(props) {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getNotes().then((data) => {
      const notes = data.map((note) => ({
        ...note,
        bgColor: randomBgColor(),
      }));
      setNotes(notes);
    });
  }, []);

  function randomBgColor() {
    const bgColor = ["#F7D44C", "#EB7A53", "#98B7DB", "#A8D672", "#F6ECC9"];
    return bgColor[Math.floor(Math.random() * bgColor.length)];
  };

  return (
    <div className="notes">
      {notes.map((note) => (
        <Note
          key={note._id}
          id={note._id}
          title={note.title}
          content={note.content}
          bgColor={note.bgColor}
        />
      ))}
      <CreateNote
        open={props.open}
        handleInput={props.handleInput}
        handlePost={props.handlePost}
        createNote={props.createNote}
        handleClose={props.handleClose}
        handleOpen={props.handleOpen}
      />
    </div>
  );
};

export default Notes;
