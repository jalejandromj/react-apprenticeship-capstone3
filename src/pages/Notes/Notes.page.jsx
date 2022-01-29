import React, {useEffect, useState } from 'react';

import useFirebase from '../../utils/hooks/useFirebase';
import Button from "../../components/Button";
import RoundButton from "../../components/RoundButton";
import Col from "../../components/Col";
import Input from "../../components/Input";
import Row from "../../components/Row";
import { NoteEditorContainer, NotePanel } from "./Notes.page.styles";

function NotesPage() {
  const [notes, setNotes] = useState([]);
  const { getFirebaseNotes, insertFirebaseNotes, updateFirebaseNotes } = useFirebase();

  async function getNotes() {
    const newNotes = await getFirebaseNotes();
    setNotes(newNotes);
  }

  async function insertNotes(e) {
    await insertFirebaseNotes(e.target, notes);
    getNotes();
  }

  async function updateNote(index, note) {
    await updateFirebaseNotes(index, note);
    getNotes();
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
                    <RoundButton onClick={() => updateNote(index, note)}>
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
    insertNotes(e);
  }

  useEffect(() => {
    if(notes.length === 0)
      getNotes();
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