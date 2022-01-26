import React from 'react';

import Col from '../Col';
import Button from '../Button';
import Row from '../Row';

import { SidebarNav } from './Sidebar.styles';

function Sidebar() {

  return (
    <SidebarNav id="sidebar">
      <Row>
        <Col
            sm={12}
          >
          <Button >Home</Button>
        </Col>
      </Row>
    </SidebarNav>
  );
}

export default Sidebar;