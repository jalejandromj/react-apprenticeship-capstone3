import React, {useEffect} from 'react';

import styled from 'styled-components';

//import Button from "../../components/Button";
import Col from "../../components/Col";
//import Input from "../../components/Input";
import Row from "../../components/Row";

const NoteEditorColumn = styled(Col)`
  color: red;
  border-color: red;
`;

function NotesPage() {

  useEffect(() => {

  }, []);

  return (
    <section className="notes-page">
      <Row style={{height: "25%"}}>
        <Col md={3} lg={3}/>
        <NoteEditorColumn md={6} lg={6} alignX>Notes</NoteEditorColumn>
      </Row>
    </section>
  );
}

export default NotesPage;