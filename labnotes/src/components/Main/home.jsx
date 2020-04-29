import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as firebase from "firebase/app";
import Nav from "./Nav";
import {
  NoteList,
  NoteDiv,
  EditIcons,
  EditNoteDiv,
  NoteContent,
} from "../../styles/NoteList";
import { Header, Div, Notes } from "../../styles/Home";
import Delete from "../../img/delete.png";
import Edit from "../../img/edit.png";

const Home = () => {
  const db = firebase.firestore();
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    db.collection("Notes")
      .get()
      .then((data) => {
        setNotes(data.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      });
  }, []);

  const editNote = () => {
    console.log("edit note");
  };

  const deleteNote = () => {
    console.log("delete note");
    //db.collection("Notes").onSnapshot((querySnapshot) => {
    /*let changes = querySnapshot.docChanges();
      changes.forEach((change) => {
        if (change.type == "removed") {
          let li = postList.querySelector("[data-id =" + change.doc.id + "]");
          postList.removeChild(li);
        }
      });*/
    //});
  };

  return (
    <Div>
      <Header>My notes</Header>
      <Notes>
        <ul>
          {notes.map((note) => (
            <NoteDiv key={note.id}>
              <NoteContent>
                <NoteList primary>{note.Title || note.title}</NoteList>
                <NoteList> {note.Text || note.text}</NoteList>
              </NoteContent>
              <EditNoteDiv>
                <Link to="/edit">
                  <EditIcons src={Edit} alt="Edit note" onClick={editNote} />
                </Link>
                <EditIcons
                  src={Delete}
                  alt="Delete note"
                  onClick={deleteNote}
                />
              </EditNoteDiv>
            </NoteDiv>
          ))}
        </ul>
      </Notes>
      <Nav />
    </Div>
  );
};

export default Home;
