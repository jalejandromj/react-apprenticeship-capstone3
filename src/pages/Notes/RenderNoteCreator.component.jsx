import Button from "../../components/Button";
import Col from "../../components/Col";
import Input from "../../components/Input";
import Row from "../../components/Row";
import { NoteEditorContainer } from "./Notes.page.styles";

function RenderNoteCreator({theme, action, actionFunction, index, note}) {
    const handleSubmit = (e) => {
        e.preventDefault();
        if(action === "create")
          actionFunction(e.target);
        else
          note = {color: e.target.color.value, note: e.target.note.value, title: e.target.title.value };
          actionFunction(index, note, false);
    }

    return(
      <NoteEditorContainer md={6} lg={6} style={{height: "100%"}} centerX>
        <form onSubmit={handleSubmit} style={{width: "100%"}}>
          <Row>
            <Col md={12} lg={12}>
              <Input noLabel name="title" type="text" placeholder="Title" defaultValue={note ? note.title : null} theme={theme} required/>
            </Col>
          </Row>
          <Row>
            <Col md={12} lg={12}>
              <Input noLabel name="note" type="text" placeholder="Write your note here..." defaultValue={note ? note.note : null} theme={theme} required/>
            </Col>
          </Row>
          <Row>
            <Col md={3} lg={3}>
              <select name="color" id="color">
                <option value="rgb(var(--indigo-blue))">Aqua</option>
                <option value="black">Black</option>
                <option value="rgb(var(--dark-blue))">Blue</option>
                <option value="rgb(var(--dark-purple))">Purple</option>
                <option value="rgb(var(--wine))">Wine</option>
              </select>
            </Col>
            <Col md={4} lg={5}/>
            <Col md={5} lg={4} style={{alignItems: "end"}}>
              <Button style={{backgroundColor: "rgb(var(--wine))"}} type="submit">{action === "create" ? "Create note" : "Edit note"}</Button> 
            </Col>
          </Row>
        </form>
      </NoteEditorContainer>
    );
  }

  export {RenderNoteCreator};