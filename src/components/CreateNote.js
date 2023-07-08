import React, { useState } from "react";
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

function CreateNote() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className="newNoteDiv" onClick={handleOpen}>
        <input placeholder="Take a note" disabled></input>
        <button>+</button>
      </div>

      <Modal open={open} onClose={handleClose}>
        <Box sx={modalStyle}>
          <input
            className="modalInput"
            type="text"
            name="title"
            placeholder="Title"
          ></input>
          <textarea
            className="modalInput"
            name="content"
            placeholder="Take a Note..."
          ></textarea>
          <Button id="addNoteBtn">Add Note</Button>
        </Box>
      </Modal>
    </>
  );
}

export default CreateNote;
