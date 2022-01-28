import React from 'react';

import { ColDiv } from './Col.styles';

function Col({className, children, style, md, lg, xl,centerX, centerY}) {
 
  return (
    <ColDiv className={className} md={md} lg={lg} xl={xl} style={style} centerX={centerX} centerY={centerY}>{children}</ColDiv>
  );
}

export default Col;
