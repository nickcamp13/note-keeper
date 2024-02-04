import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [noteList, setNoteList] = useState([]);

  function updateNotes(newNote) {
    setNoteList((currentList) => {
      return [...currentList, newNote];
    });
  }

  function removeNote(id) {
    setNoteList((currentList) => {
      return currentList.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={updateNotes} />
      {noteList.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            deleteNote={removeNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
