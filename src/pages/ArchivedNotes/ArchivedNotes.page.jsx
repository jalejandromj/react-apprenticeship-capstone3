import React, {useEffect, useState } from 'react';

import useFirebase from '../../utils/hooks/useFirebase';
//import Button from "../../components/Button";
import RoundButton from "../../components/RoundButton";
import Col from "../../components/Col";
//import Input from "../../components/Input";
import Row from "../../components/Row";
import { NotePanel } from "./ArchivedNotes.styles";

function ArchivedNotesPage() {
  const [notes, setNotes] = useState(null);
  const { getFirebaseNotes, updateFirebaseNotes } = useFirebase();

  async function getNotes() {
    const newNotes = await getFirebaseNotes();
    setNotes(newNotes);
  }

  async function updateNote(index, note) {
    await updateFirebaseNotes(index, note, false);
    getNotes();
  }

  const RenderNotes = () => {
    if(notes){//If there are any notes, lets review them to see which ones to show...
      const archivedNotes = notes.filter(note => note.archived === true); //Get all notes ARCHIVED...

      if(archivedNotes.length > 0){ //Are those notes ARCHIVED...should I display them?
        const renderedNotes = notes.map((note, index) => {
          if(note.archived){
            return(
              <NotePanel key={`${note.title}_${index}`} md={4} lg={3}>
                <div style={{backgroundColor: note.color}}>
                  <Row >
                    <Col md={9} lg={9}><h4 style={{margin: 0}}>{note.title}</h4></Col>
                    <Col md={3} lg={3} style={{alignItems: "left"}}>
                      <RoundButton onClick={() => updateNote(index, note)}>
                        <i >{index}</i>
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
      }else{
        return(
          <>
            <Col md={3} lg={3}></Col>
            <Col md={6} lg={6} style={{height: "100%"}} centerX centerY>
              <p>Apparently there are no archived notes...</p>
            </Col>
          </>
        );
      }
    }else{ //If not, just say there are no ANY NOTES...
      return(
        <>
          <Col md={3} lg={3}></Col>
          <Col md={6} lg={6} style={{height: "100%"}} centerX centerY>
            <p>Oh no...there are no notes; please create a new one using the creation note input.</p>
          </Col>
        </>
      );
    }
  };

  useEffect(() => {
    if(!notes)
      getNotes();
  }, [notes]);

  return (
    <section className="archivednotes-page">
      <Row style={{height: "auto"}}>
        <Col md={12} lg={12}><h2>Archived Notes</h2></Col>
      </Row>
      <Row style={{height: "90%", overflowY: "scroll"}}>
        <RenderNotes />
      </Row>
    </section>
  );
}

export default ArchivedNotesPage;