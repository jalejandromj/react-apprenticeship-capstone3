import React, {useEffect, useState } from 'react';

import { getDatabase, ref, set, child, get, update } from "firebase/database";

import Button from "../../components/Button";
import RoundButton from "../../components/RoundButton";
import Col from "../../components/Col";
import Input from "../../components/Input";
import Row from "../../components/Row";
import { NoteEditorContainer, NotePanel } from "./Notes.page.styles";

function NotesPage() {
  const uid = sessionStorage.getItem('uid');
  const [notes, setNotes] = useState([]);

  const getFbNotes = () => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `users/${uid}`)).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val().notes);
        setNotes(snapshot.val().notes);
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  }

  const insertFbNotes = (e) => {
    const database = getDatabase();
    const newNote = {title: e.target.title.value, note: e.target.note.value, color: e.target.color.value, archived: false};
    notes.push(newNote);

    set(ref(database, 'users/' + uid), {
      notes: notes,
    })
    .then(() => {
      getFbNotes();
    }).catch((error) => {
      console.error(error);
    });
  }

  const updateFbNote = (index, note) => {
    const db = getDatabase();
    const noteData = {
      title: note.title,
      note: note.note,
      color: note.color,
      archived: true
    };
    const updates = {};
    updates['/users/' + uid + '/notes/' + index] = noteData;

    update(ref(db), updates)
    .then(() => {
      getFbNotes();
    }).catch((error) => {
      console.error(error);
    });
  }

  const RenderNoteCreator = () => {
    return(
      <NoteEditorContainer md={6} lg={6} style={{height: "100%"}} centerX>
        <form onSubmit={handleSubmit} style={{width: "100%"}}>
          <Row>
            <Col md={12} lg={12}>
              <Input noLabel name="title" type="text" placeholder="Title" theme="dark" required/>
            </Col>
          </Row>
          <Row>
            <Col md={12} lg={12}>
              <Input noLabel name="note" type="text" placeholder="Write your note here..." theme="dark" required/>
            </Col>
          </Row>
          <Row>
            <Col md={3} lg={3}>
              <select name="color" id="color">
                <option value="black">Black</option>
                <option value="rgb(var(--wine))">Wine</option>
                <option value="rgb(var(--dark-blue))">Blue</option>
                <option value="rgb(var(--dark-purple))">Purple</option>
                <option value="rgb(var(--indigo-blue))">Aqua</option>
              </select>
            </Col>
            <Col md={4} lg={5}/>
            <Col md={5} lg={4} style={{alignItems: "end"}}>
              <Button style={{backgroundColor: "rgb(var(--wine))"}} type="submit">Create note</Button> 
            </Col>
          </Row>
        </form>
      </NoteEditorContainer>
    );
  }

  const RenderNotes = () => {
    if(notes.length > 0){//If there are any notes, render and show them...
      const renderedNotes = notes.map((note, index) => {
        if(!note.archived){
          return(
            <NotePanel key={note.title} md={4} lg={3}>
              <div style={{backgroundColor: note.color}}>
                <Row >
                  <Col md={9} lg={9}><h4 style={{margin: 0}}>{note.title}</h4></Col>
                  <Col md={3} lg={3} style={{alignItems: "left"}}>
                    <RoundButton onClick={() => updateFbNote(index, note)}>
                      <i ></i>
                    </RoundButton>
                  </Col>
                </Row>
                <Row >
                  <Col md={12} lg={12}><p>{note.note}</p></Col>
                </Row>
              </div>
            </NotePanel>
          );
        }
      });
      return(renderedNotes);
    }else{ //If not, custom No notes message...
      return(
        <>
          <Col md={3} lg={3}></Col>
          <Col md={6} lg={6} style={{height: "100%"}} centerX centerY>
            <p>Oh no...there are no notes; please create a new one using the creation note input.</p>
          </Col>
        </>
      );
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    insertFbNotes(e);
  }

  useEffect(() => {
    if(notes.length === 0)
      getFbNotes();
  }, [notes]);

  return (
    <section className="notes-page">
      <Row style={{height: "auto"}}>
        <Col md={3} lg={3}/>
        <RenderNoteCreator />
      </Row>
      <Row style={{height: "70%", overflowY: "scroll", marginTop: "50px"}}>
        <RenderNotes />
      </Row>
    </section>
  );
}

export default NotesPage;