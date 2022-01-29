import styled from 'styled-components';

import Col from "../../components/Col";

const NoteEditorContainer = styled(Col)`
  border: 1px solid rgb(var(--wine));
  border-radius: 5px;
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 55%);
  padding: 0.5% 1%;
`;

const NotePanel = styled(NoteEditorContainer)`
  border: none;
  box-shadow: none;
  height: 40%;
  padding: 2.5% 1%;

  & > div {
    border: 1px solid rgb(var(--wine));
    border-radius: 5px;
    color: rgb(var(--discreet-white));
    height: 100%;
    overflow-y: scroll;
    padding: 15px 15px;
  }
  & > div:hover {
    box-shadow: 0 5px 5px 0 rgb(0 0 0 / 55%);
  }
`;

export { NoteEditorContainer, NotePanel };