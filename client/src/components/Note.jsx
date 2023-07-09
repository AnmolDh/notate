import React from "react";

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
    </div>
  );
}

export default Note;
