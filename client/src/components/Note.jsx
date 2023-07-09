import React from "react";
import { Fab } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteNote, editNote } from "../api/notesApi";
import CreateNote from "./CreateNote";

function Note(props) {
  function handleDelete() {
    deleteNote(props.id);
  }

  function handleEdit() {
    
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
        <Fab className="icon" color="gray" size="small" aria-label="edit" onClick={handleEdit}>
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
