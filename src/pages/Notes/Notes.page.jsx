import React, {useEffect, useState } from 'react';

import useFirebase from '../../utils/hooks/useFirebase';
import RoundButton from "../../components/RoundButton";
import Col from "../../components/Col";
import Input from "../../components/Input";
import { RenderNoteCreator } from "./";
import Row from "../../components/Row";
import { NotePanel } from "./Notes.page.styles";

function NotesPage() {
  const [notes, setNotes] = useState(null);
  const [editNote, setEditNote] = useState(null);
  const [filteredNotes, setFilteredNotes] = useState(null);
  const [filter, setFilter] = useState(null);
  const { getFirebaseNotes, insertFirebaseNotes, updateFirebaseNotes } = useFirebase();

  async function getNotes() {
    const newNotes = await getFirebaseNotes();
    setNotes(newNotes);
  }

  async function insertNotes(target) {
    await insertFirebaseNotes(target, notes);
    getNotes();
  }

  async function updateNote(index, note, toArchive) {
    await updateFirebaseNotes(index, note, toArchive);
    getNotes();
    setFilteredNotes(null);
    setEditNote(null);
  }

  const filterNotes = (value) => {
    setFilter(value);
    let filteredNotesArray = [];
    if(notes){
      // Not the best approach, but as I am managing all the logic based on the initial "unique" firebase notes array index...
      notes.map((filterNote) => {
        let result = filterNote.note.toLowerCase().includes(value.toLowerCase());
        if(result){
          filteredNotesArray.push(filterNote);
        }else{
          filteredNotesArray.push({});
        }
      })
      setFilteredNotes(filteredNotesArray);
    }
  }

  //Pending to migrate to own component...
  const RenderNotes = () => {
    let notesToRender;
    if(filteredNotes === null || filter === ""){ //If there is no filter nor filtered notes...
      notesToRender = notes;
    }else{// If there is indeed a filter, use the filtered notes instead of all notes...
      notesToRender = filteredNotes;
    }
    
    if(notesToRender){//There are EXISTING notes...
      const unarchivedNotes = notesToRender.filter(note => note.archived === false); //Try to get all notes NOT archived...

      if(unarchivedNotes.length > 0){ //Are those notes unarchived...should I display them?
        const renderedNotes = notesToRender.map((note, index) => {
          if(!note.archived && note.title){
            return(
              <NotePanel className={editNote === index ? "edit-modal" : null} key={`${note.title}_${index}`} md={4} lg={3} onClick={() => alert('tes')}>
                <div id={`note_${index}`} style={{backgroundColor: note.color}}>
                  {(editNote === index) ?
                    <RenderNoteCreator theme="light" action="edit" index={index} actionFunction={updateNote} note={note}/>
                  :
                  <>
                    <Row >
                      <Col md={6}><h4 style={{margin: 0}}>{note.title}</h4></Col>
                      <Col md={2} style={{alignItems: "end"}}>
                        <RoundButton onClick={() => updateNote(index, note, true)}>
                          <i className="i-archive"></i>
                        </RoundButton>
                      </Col>
                      <Col md={3} style={{alignItems: "end"}}>
                        <RoundButton onClick={() => setEditNote(index)}>
                          <i className="i-edit"></i>
                        </RoundButton>
                      </Col>
                    </Row>
                    <Row >
                      <Col md={12}><p>{note.note}</p></Col>
                    </Row>
                  </>
                  }
                </div>
              </NotePanel>
            );
          }
        })
        return(renderedNotes);
      }else{
          return(
            <>
              <Col md={3} ></Col>
              <Col md={6} style={{height: "100%"}} centerX centerY>
                {filter ?
                  <p>There are no match results. Try another search.</p>
                :
                  <p>Apparently all your notes are archived....</p>
                }
              </Col>
            </>
          );
      }
    }else{ //If not, just say there are no ANY NOTES...
      return(
        <>
          <Col md={3}></Col>
          <Col md={6} style={{height: "100%"}} centerX centerY>
            <p>Oh no...there are no notes; please create a new one using the creation note input.</p>
          </Col>
        </>
      );
    }
  }

  useEffect(() => {
    if(!notes)
      getNotes();
  }, [notes]);

  return (
    <section className="notes-page">
      <Row style={{height: "auto"}}>
        <Col md={3} />
        <RenderNoteCreator theme="dark" actionFunction={insertNotes} action="create"/>
      </Row>
      <Row style={{height: "7%"}}>
        <Col md={3} />
        <Col md={6} >
          <Input label="Search note (content)" name="search" type="text" placeholder="Take dog to bath" theme="dark" onChange={(e) => filterNotes(e.target.value)} required/>
        </Col>
      </Row>
      <Row style={{height: "70%", overflowY: "scroll", marginTop: "50px"}}>
        <RenderNotes />
      </Row>
    </section>
  );
}

export default NotesPage;