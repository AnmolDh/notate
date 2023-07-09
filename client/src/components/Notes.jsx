import React, { useEffect, useState } from "react";
import Note from "./Note";

function Notes() {
  const [notes, setNotes] = useState([]);

  function randomBgColor() {
    const bgColor = ["#F7D44C", "#EB7A53", "#98B7DB", "#A8D672", "#F6ECC9"];
    return bgColor[Math.floor(Math.random() * bgColor.length)];
  }

  useEffect(() => {
    fetch("http://localhost:4000")
      .then((response) => response.json())
      .then((data) => {
        const notes = data.map((note) => ({
          ...note,
          bgColor: randomBgColor(),
        }));
        setNotes(notes);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="notes">
      {notes.map((note) => (
        <Note
          key={note._id}
          title={note.title}
          content={note.content}
          bgColor={note.bgColor}
        />
      ))}
    </div>
  );
}

export default Notes;
