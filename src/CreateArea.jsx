import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
import { orange } from "@mui/material/colors";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const [isExpand, setExpand] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function handleClick(event) {
    props.doAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  function handleExpand() {
    setExpand(true);
  }

  return (
    <div>
      <form className="create-note">
        <input
          onClick={handleExpand}
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        {isExpand && (
          <textarea
            onChange={handleChange}
            name="content"
            placeholder="Take a note..."
            rows={isExpand ? 3 : 1}
            value={note.content}
          />
        )}
        <Zoom in={isExpand}>
          <Fab color="secondary" onClick={handleClick} aria-label="add">
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
