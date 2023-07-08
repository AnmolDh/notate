import React from "react";
import Note from "./Note";

function Notes() {
  return (
    <div className="notes">
      <Note
        content={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris"
        }
        bgColor={"#F7D44C"}
      />
      <Note
        content={
          " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidtrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
        }
        bgColor={"#EB7A53"}
      />
      <Note
        content={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
        }
        bgColor={"#98B7DB"}
      />
      <Note
        content={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in"
        }
        bgColor={"#A8D672"}
      />
      <Note
        content={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"
        }
        bgColor={"#F6ECC9"}
      />
    </div>
  );
}

export default Notes;
