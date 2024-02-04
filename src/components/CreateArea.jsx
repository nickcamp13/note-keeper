import React, { useState } from "react";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  // const [title, setTitle] = useState("");
  // const [content, setContent] = useState("");

  // function updateTitle(event) {
  //   const title = event.target.value;
  //   setTitle(title);
  // }
  // function updateContent(event) {
  //   const content = event.target.value;
  //   setTitle(content);
  // }

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [isExpanded, setExpanded] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            onChange={handleChange}
            name="title"
            placeholder="Title"
            value={note.title}
          />
        )}
        <textarea
          onChange={handleChange}
          onClick={expand}
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
          value={note.content}
        />
        {note.content !== "" && note.title !== "" && (
          <Zoom in={isExpanded}>
            <Fab
              onClick={(event) => {
                props.addNote(note);
                setNote({
                  title: "",
                  content: "",
                });
                event.preventDefault();
              }}
            >
              <NoteAddIcon />
            </Fab>
          </Zoom>
        )}
      </form>
    </div>
  );
}

export default CreateArea;
