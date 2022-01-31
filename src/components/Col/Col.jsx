import React from 'react';

import { ColDiv } from './Col.styles';

function Col({md, lg, xl,centerX, centerY, style, className, children}) {
  //At least you need to provid an MD size for desktop sized...
  return (
    <ColDiv className={className} md={md} lg={lg ? lg : md} xl={xl ? xl : lg} style={style} centerX={centerX} centerY={centerY}>{children}</ColDiv>
  );
}

export default Col;
