import React, { Component } from "react";
import Note from "../../styles/note";
import NoteBox from "../../styles/noteBox";
import NewNoteNav from "./NewNoteNav";

class CreateNote extends Component {
  state = {};
  render() {
    return (
      <>
        <NewNoteNav />
        <Note>
          <NoteBox primary type="text" placeholder="Title" />
          <NoteBox type="text" placeholder="Write your note here!" />
        </Note>
      </>
    );
  }
}

export default CreateNote;
