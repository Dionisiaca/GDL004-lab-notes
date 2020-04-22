import React, { Component } from "react";
import * as firebase from "firebase/app";
import firebaseConfig from "../../firebase";
import Nav from "./Nav";
import Note from "../../styles/note";
import { NoteList, NoteListDiv } from "../../styles/NoteList";

function Home() {
  const [notes, setNotes] = React.useState([]);

  React.useEffect(() => {
    const db = firebase.firestore();
    db.collection("Notes")
      .get()
      .then((data) => {
        setNotes(data.docs.map((doc) => doc.data()));
      });
  }, []);

  return (
    <>
      <Nav />
      <Note>
        <ul>
          {notes.map((note) => (
            <NoteListDiv>
              <NoteList primary key={note.Title}>
                {note.Title}
              </NoteList>
              <NoteList key={note.Text}> {note.Text}</NoteList>
            </NoteListDiv>
          ))}
        </ul>
      </Note>
      <button onClick={() => firebaseConfig.auth().signOut()}>Sign Out</button>
    </>
  );
}

export default Home;
