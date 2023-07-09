import React, { useEffect, useState } from "react";
import Note from "./Note";

function Notes() {
  const [notes, setNotes] = useState([]);

  function randomBgColor() {
    const bgColor = ["#F7D44C", "#EB7A53", "#98B7DB", "#A8D672", "#F6ECC9"];
    return bgColor[Math.floor(Math.random() * bgColor.length)];
  }

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
