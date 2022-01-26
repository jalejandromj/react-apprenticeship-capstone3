import React from 'react';

import { useGeneralContext } from '../../state/GeneralContext';
import Col from '../Col';
import Row from '../Row';
import { ReactComponent as MenuSVG } from '../../assets/svg/menu.svg';
import { HeaderNav } from './Header.styles';

function Header() {
  const { displaySidebar, setDisplaySidebar } = useGeneralContext();

  return (
    <HeaderNav id="header">
      <Row>
        <Col md={1} lg={1} xl={2} style={{ alignItems: 'center', justifyContent: 'center' }}>
          <figure onClick={() => setDisplaySidebar(!displaySidebar)} style={{cursor: "pointer"}}><MenuSVG style={{fill: "white", height: "100%"}}/></figure>
        </Col>
        <Col md={7} lg={9} xl={2} style={{ justifyContent: 'center' }}>
          
        </Col>
        <Col
          md={2} lg={1} xl={2}
          style={{ alignItems: 'center', justifyContent: 'center' }}
        >
          
        </Col>
        <Col
          md={2} lg={1} xl={2}
          style={{ alignItems: 'center', justifyContent: 'center' }}
        >
          
        </Col>
      </Row>
    </HeaderNav>
  );
}

export default Header;