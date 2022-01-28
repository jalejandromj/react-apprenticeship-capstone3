import styled from 'styled-components';

const ButtonElement = styled.button`
  display: inline-block;
  position: relative;
  align-content: center;
  width: fit-content;
  background: ${props => props.blue ? "rgb(var(--dark-blue))" : "transparent"};
  border-style: none;
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 55%);
  color: rgba(var(--discreet-white));
  font-size: 1rem;
  padding: 12px 30px;
  text-align: left;
  transition: ease-out 0.2s;
  :hover& {
    bottom: 3px;
    box-shadow: 0 5px 5px 0 rgb(0 0 0 / 55%);
  }
  :active& {
    background-color: rgba(var(--discreet-white));
    color: rgba(var(--dark-blue));
  }
`;

export { ButtonElement };