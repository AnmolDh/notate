import React from "react";
import { Box, Button, Modal } from "@mui/material";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "rgb(18, 18, 18)",
  border: "2px solid #000",
  borderRadius: "20px",
  boxShadow: 24,
  p: 4,
};

function CreateNote(props) {
  return (
    <>
      <Modal open={props.open} onClose={props.handleClose}>
        <Box sx={modalStyle}>
          <input
            className="modalInput"
            type="text"
            name="title"
            placeholder="Title"
            onChange={props.handleInput}
            value={props.createNote.title}
          ></input>
          <textarea
            className="modalInput"
            name="content"
            placeholder="Take a Note..."
            rows="2"
            onChange={props.handleInput}
            value={props.createNote.content}
          ></textarea>
            {props.isNewNote ? (
            <Button id="addNoteBtn" onClick={props.handlePost}>
              Add Note
            </Button>
          ) : (
            <Button id="addNoteBtn" onClick={props.handlePost}>
              Edit Note
            </Button>
          )}
        </Box>
      </Modal>
    </>
  );
}

export default CreateNote;
