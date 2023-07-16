import React, { useCallback, useEffect, useState } from "react";
import { getNotes, postNote, deleteNote, editNote } from "../api/notesApi";
import Note from "./Note";
import CreateNote from "./CreateNote";

function Notes(props) {
  const [notes, setNotes] = useState([]);
  const [noteId, setNoteId] = useState("");

  function randomBgColor() {
    const bgColor = ["#F7D44C", "#EB7A53", "#98B7DB", "#A8D672", "#F6ECC9"];
    return bgColor[Math.floor(Math.random() * bgColor.length)];
  }

  const updateNotes = useCallback(() => {
    getNotes().then((data) => {
      const notes = data.map((note) => ({
        ...note,
        bgColor: randomBgColor(),
      }));
      setNotes(notes);
    });
  }, [setNotes]);

  useEffect(() => {
    updateNotes();
  }, [updateNotes]);

  function handleAdd() {
    postNote(props.addNote).then(() => {
      updateNotes()
    });
    props.handleClose();
    props.setAddNote({ title: "", content: "" });
  }

  function handleDelete(id) {
    deleteNote(id).then(() => {
      setNotes((prevNotes) => prevNotes.filter((note) => note._id !== id));
    });
  }

  function handleEdit(id, title, content) {
    props.setIsNewNote(false);
    props.handleOpen();
    props.setCreateNote({
      title: title,
      content: content,
    });
    setNoteId(id);
  }

  function handleEditNote() {
    editNote(noteId, props.createNote);
    props.handleClose();
    setTimeout(updateNotes, 100);
  }

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
          handleEdit={() => handleEdit(note._id, note.title, note.content)}
        />
      ))}
      <CreateNote
        open={props.open}
        handleInput={props.handleInput}
        handleAdd={handleAdd}
        handleEditNote={handleEditNote}
        createNote={props.addNote}
        handleClose={props.handleClose}
        isNewNote={props.isNewNote}
      />
    </div>
  );
}

export default Notes;
