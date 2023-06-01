import DeleteIcon from "@mui/icons-material/Delete";
import Fab from '@mui/material/Fab';

function Note(props) {
  function handleClick() {
    props.doDelete(props.id);
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <Fab onClick={handleClick} aria-label="delete">
        <DeleteIcon />
      </Fab>
    </div>
  );
}

export default Note;
