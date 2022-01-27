import React from 'react';

import Col from "../../components/Col";
import Row from "../../components/Row";

function CenteredPanel({children, backgroundColor}) {

  return (
    <Row style={{height: "100%",
                   paddingTop: "5%",
                   paddingBottom: "5%",
                   }}>
      <Col md={2} lg={2} />
      <Col md={8} lg={8} style={{backgroundColor: backgroundColor, boxShadow: "0 5px 15px 8px rgb(0 0 0 / 55%)", padding: "4% 4%", overflowY: "auto"}}>
        {children}
      </Col>
      <Col md={2} lg={2} />
    </Row>
  );
}

export default CenteredPanel;
