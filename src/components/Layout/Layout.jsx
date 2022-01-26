import React from 'react';

import { useGeneralContext } from '../../state/GeneralContext';
import Header from '../Header';
import Sidebar from '../Sidebar';
import { LayoutDiv, MainContainer } from './Layout.styles';

function Layout({ children }) {
  const { displaySidebar } = useGeneralContext();

  return (
    <LayoutDiv
      id="layout"
      className={displaySidebar ? `sidebar-display` : `sidebar-hidden`}
    >
      <Header/>

      {displaySidebar ? (
        <Sidebar/>
      ) : null}

      <MainContainer id="main-container">
        {children}
      </MainContainer>
    </LayoutDiv>
  );
}

export default Layout;
