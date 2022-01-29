import React from 'react';
import { useNavigate } from "react-router-dom";

import Col from '../Col';
import Button from '../Button';
import Row from '../Row';

import { SidebarNav } from './Sidebar.styles';

function Sidebar() {
  let navigate = useNavigate();

  return (
    <SidebarNav id="sidebar">
      <Row>
        <Col
            sm={12}
          >
          <Button style={{width: "100%"}} onClick={() => navigate(`/notes`)}>My notes</Button>
        </Col>
      </Row>
      <Row>
        <Col
            sm={12}
          >
          <Button style={{width: "100%"}} onClick={() => navigate(`/notes/archived`)}>Archived</Button>
        </Col>
      </Row>
    </SidebarNav>
  );
}

export default Sidebar;