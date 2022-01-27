import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import { useGeneralContext } from '../../state/GeneralContext';
import Button from "../../components/Button";
import Col from '../Col';
import Row from '../Row';
import { ReactComponent as MenuSVG } from '../../assets/svg/menu.svg';
import { HeaderNav } from './Header.styles';

function Header() {
  let navigate = useNavigate();
  let authToken = sessionStorage.getItem('Auth Token');
  const { displaySidebar, setDisplaySidebar } = useGeneralContext();

  const handleLogout = () => {
    sessionStorage.removeItem('Auth Token');
    navigate('/login')
  }

  useEffect(() => {
    
  }, []);

  return (
    <HeaderNav id="header">
      <Row>
        <Col md={1} lg={1} xl={2} style={{ alignItems: 'center', justifyContent: 'center' }}>
          <figure onClick={() => setDisplaySidebar(!displaySidebar)} style={{cursor: "pointer"}}><MenuSVG style={{fill: "white", height: "100%"}}/></figure>
        </Col>
        <Col md={7} lg={7} xl={2} style={{ justifyContent: 'center' }}>
          
        </Col>
        <Col
          md={2} lg={2} xl={2}
          style={{ alignItems: 'center', justifyContent: 'center' }}
        >
          
        </Col>
        <Col
          md={2} lg={2} xl={2}
          style={{ alignItems: 'center', justifyContent: 'center' }}
        >
          {authToken ?
            <Button style={{backgroundColor:"rgb(var(--indigo-blue))"}} onClick={() => handleLogout()}>Log out</Button>
          :
            <Button style={{backgroundColor:"rgb(var(--indigo-blue))"}} onClick={() => navigate(`/login`)}>Log in</Button>
          }
        </Col>
      </Row>
    </HeaderNav>
  );
}

export default Header;