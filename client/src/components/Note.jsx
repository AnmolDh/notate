import React from "react";
import { Fab } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function Note(props) {
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
        <Fab className="icon" color="gray" size="small" aria-label="edit" onClick={props.handleEdit}>
          <EditIcon />
        </Fab>
        <Fab className="icon" color="gray" size="small" aria-label="delete" onClick={props.handleDelete}>
          <DeleteIcon />
        </Fab>
      </div>
    </div>
  );
}

export default Note;
