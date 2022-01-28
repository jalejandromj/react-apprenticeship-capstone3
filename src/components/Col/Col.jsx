import React from 'react';

import { ColDiv } from './Col.styles';

function Col({className, children, style, md, lg, xl, centerX}) {
 
  return (
    <ColDiv className={className} md={md} lg={lg} xl={xl} style={style} centerX={centerX}>{children}</ColDiv>
  );
}

export default Col;
