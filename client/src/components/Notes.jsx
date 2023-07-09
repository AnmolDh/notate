import React, { useEffect, useState } from "react";
import Note from "./Note";

function Notes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000")
      .then((r) => r.json())
      .then((data) => setNotes(data))
      .catch((err) => console.log(err));
  }, [notes]);

  return (
    <div className="notes">
      {notes.map((note) => <Note key={note.id} title={note.title} content={note.content} />)}
    </div>
  );
}

export default Notes;
