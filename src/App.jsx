import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";


function App() {
  const [notes, setNotes] = useState([]);

  function handleAdd(note) {
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  }

  function handleDelete(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea doAdd={handleAdd} />
      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            doDelete={handleDelete}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
