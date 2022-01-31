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
  padding: 1% 1%;

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
  &.edit-modal {
    position: absolute;
    left: 15%;
    top: 8%;
    height: 92%;
    width: 85%;
    background-color: rgb(0 0 0 / 85%);
    z-index: 1;
  }
  &.edit-modal > div {
    position: absolute;
    left: 25%;
    top: 25%;
    height: 50%;
    width: 50%;
    z-index: 20;
  }
  &.edit-modal > div > div {
    border: none;
    box-shadow: none;
  }
`;

export { NoteEditorContainer, NotePanel };