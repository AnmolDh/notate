import React from "react";
import { Fab } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteNote } from "../api/notesApi";

function Note(props) {
  function handleDelete() {
    deleteNote(props.id);
    console.log(props.id)
  }

  return (
    <div className="note" style={{ backgroundColor: props.bgColor }}>
      <div className="noteTitle">
        <h3>{props.title}</h3>
      </div>
      <hr />
      <div className="noteContent">
        <p>{props.content}</p>
      </div>
      <div className="toolsDiv">
        <Fab className="icon" color="gray" size="small" aria-label="edit">
          <EditIcon />
        </Fab>
        <Fab className="icon" color="gray" size="small" aria-label="delete" onClick={handleDelete}>
          <DeleteIcon />
        </Fab>
      </div>
    </div>
  );
}

export default Note;
