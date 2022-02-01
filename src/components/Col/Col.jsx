import React from 'react';

import { ColDiv } from './Col.styles';

function Col({md, lg, xl,centerX, centerY, style, className, children}) {
  //At least you need to provid an MD size for desktop sized...
  if(!lg)
    lg = md;
  if(!xl)
    xl = lg;
  return (
    <ColDiv className={className} md={md} lg={lg} xl={xl} style={style} centerX={centerX} centerY={centerY}>{children}</ColDiv>
  );
}

export default Col;
