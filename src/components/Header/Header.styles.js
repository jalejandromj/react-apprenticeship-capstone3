import styled from 'styled-components';

const HeaderNav = styled.nav`
  grid-area: header;
  background-color: rgba(var(--dark-blue));
  box-shadow: 0 9px 5px 0 rgb(0 0 0 / 55%);
  color: rgba(var(--discreet-white));
  & > div {
    position: relative;
    top: 15%;
    height: 70%;
  }
  & > div > div {
    display: flex;
    height: 100%;
  }
`;

export { HeaderNav };