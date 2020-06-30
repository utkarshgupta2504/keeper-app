import React, { useState } from "react";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import AddCircleIcon from "@material-ui/icons/Add";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [isClicked, setIsClicked] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setNote({ ...note, [name]: value });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });

    setIsClicked(false);
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note" autoComplete="off">
        {isClicked && (
          <input
            onChange={handleChange}
            name="title"
            placeholder="Title"
            value={note.title}
          />
        )}
        <textarea
          onChange={handleChange}
          onClick={() => {
            setIsClicked(true);
          }}
          name="content"
          placeholder="Take a note..."
          rows={isClicked ? 3 : 1}
          value={note.content}
        />
        <Zoom in={isClicked}>
          <Fab onClick={submitNote}>
            <AddCircleIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
