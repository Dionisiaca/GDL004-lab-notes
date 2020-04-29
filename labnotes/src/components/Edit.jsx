import React, { useState } from "react";
import { Link } from "react-router-dom";
import firebase from "firebase";
import Note from "../styles/note";
import NoteBox from "../styles/noteBox";
import save from "../img/save.png";
import { NavBar, Icons } from "../styles/Nav";

const Edit = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const handleCreateNote = () => {
    const database = firebase.firestore();

    if (text) {
      database.collection("Notes").add({
        title: title || "Untitled",
        text,
        userId: firebase.auth().currentUser?.uid,
      });
    }
  };

  return (
    <>
      <NavBar>
        <Link to="/home">
          <Icons src={save} alt="New Note" onClick={handleCreateNote} />
        </Link>
      </NavBar>
      <Note>
        <NoteBox
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          primary
          type="text"
          placeholder="Title"
        />
        <NoteBox
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          type="text"
          placeholder="Write your note here!"
        />
      </Note>
    </>
  );
};

export default Edit;
