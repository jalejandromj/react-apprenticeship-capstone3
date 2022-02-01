import styled from 'styled-components';

import ArchiveImg from '../../assets/img/archive.png';
import EditImg from '../../assets/img/edit.png';
import UnarchiveImg from '../../assets/img/unarchive.png';

const ButtonElement = styled.button`
  display: inline-block;
  position: relative;
  height: 35px;
  width: 35px;
  align-content: center;
  border-radius: 50%;
  background-color: rgba(var(--discreet-white));
  border-style: none;
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 55%);
  color: rgba(var(--discreet-white));
  cursor: pointer;
  transition: ease-out 0.2s;
  :hover& {
    box-shadow: 0 5px 5px 0 rgb(0 0 0 / 55%);
  }
  :active& {
    color: rgba(var(--dark-blue));
  }
  & > i:before {
    content: "";
    position: absolute;
    left: 20%;
    top: 20%;
    height: 60%;
    width: 60%;
  }
  & > i.i-archive:before {
    background: url(${ArchiveImg}) no-repeat;
    background-size: contain;
  }
  & > i.i-unarchive:before {
    background: url(${UnarchiveImg}) no-repeat;
    background-size: contain;
  }
  & > i.i-edit:before {
    background: url(${EditImg}) no-repeat;
    background-size: contain;
  }
`;

export { ButtonElement };